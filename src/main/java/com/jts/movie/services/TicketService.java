package com.jts.movie.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jts.movie.convertor.TicketConvertor;
import com.jts.movie.entities.Show;
import com.jts.movie.entities.ShowSeat;
import com.jts.movie.entities.Ticket;
import com.jts.movie.entities.User;
import com.jts.movie.exceptions.SeatsNotAvailable;
import com.jts.movie.exceptions.ShowDoesNotExists;
import com.jts.movie.exceptions.UserDoesNotExists;
import com.jts.movie.repositories.ShowRepository;
import com.jts.movie.repositories.TicketRepository;
import com.jts.movie.repositories.UserRepository;
import com.jts.movie.request.TicketRequest;
import com.jts.movie.response.TicketResponse;

@Service
public class TicketService {

	@Autowired
	private TicketRepository ticketRepository;

	@Autowired
	private ShowRepository showRepository;

	@Autowired
	private UserRepository userRepository;

	public TicketResponse ticketBooking(TicketRequest ticketRequest) {
		Optional<Show> showOpt = showRepository.findById(ticketRequest.getShowId());

		if (showOpt.isEmpty()) {
			throw new ShowDoesNotExists();
		}

		Optional<User> userOpt = userRepository.findById(ticketRequest.getUserId());

		if (userOpt.isEmpty()) {
			throw new UserDoesNotExists();
		}

		User user = userOpt.get();
		Show show = showOpt.get();

		Boolean isSeatAvailable = isSeatAvailable(show.getShowSeatList(), ticketRequest.getRequestSeats());

		if (!isSeatAvailable) {
			throw new SeatsNotAvailable();
		}

		// count price
		Integer getPriceAndAssignSeats = getPriceAndAssignSeats(show.getShowSeatList(),	ticketRequest.getRequestSeats());

		String seats = listToString(ticketRequest.getRequestSeats());

		Ticket ticket = new Ticket();
		ticket.setTotalTicketsPrice(getPriceAndAssignSeats);
		ticket.setBookedSeats(seats);
		ticket.setUser(user);
		ticket.setShow(show);

		ticket = ticketRepository.save(ticket);

		user.getTicketList().add(ticket);
		show.getTicketList().add(ticket);
		userRepository.save(user);
		showRepository.save(show);

		return TicketConvertor.returnTicket(show, ticket);
	}

	private Boolean isSeatAvailable(List<ShowSeat> showSeatList, List<String> requestSeats) {
		for (ShowSeat showSeat : showSeatList) {
			String seatNo = showSeat.getSeatNo();

			if (requestSeats.contains(seatNo) && !showSeat.getIsAvailable()) {
				return false;
			}
		}

		return true;
	}

	private Integer getPriceAndAssignSeats(List<ShowSeat> showSeatList, List<String> requestSeats) {
		Integer totalAmount = 0;

		for (ShowSeat showSeat : showSeatList) {
			if (requestSeats.contains(showSeat.getSeatNo())) {
				totalAmount += showSeat.getPrice();
				showSeat.setIsAvailable(Boolean.FALSE);
			}
		}

		return totalAmount;
	}

	private String listToString(List<String> requestSeats) {
		StringBuilder sb = new StringBuilder();

		for (String s : requestSeats) {
			sb.append(s).append(",");
		}

		return sb.toString();
	}

	public java.util.List<com.jts.movie.response.UserTicketResponse> getUserTickets(Integer userId) {
		return ticketRepository.findByUserId(userId).stream().map(t -> com.jts.movie.response.UserTicketResponse.builder()
				.ticketId(t.getTicketId())
				.totalTicketsPrice(t.getTotalTicketsPrice())
				.bookedSeats(t.getBookedSeats())
				.bookedAt(t.getBookedAt())
				.movieName(t.getShow() != null && t.getShow().getMovie() != null ? t.getShow().getMovie().getMovieName() : "N/A")
				.theaterName(t.getShow() != null && t.getShow().getTheater() != null ? t.getShow().getTheater().getName() : "N/A")
				.theaterAddress(t.getShow() != null && t.getShow().getTheater() != null ? t.getShow().getTheater().getAddress() : "N/A")
				.showDate(t.getShow() != null ? t.getShow().getDate() : null)
				.build()
		).collect(java.util.stream.Collectors.toList());
	}

	@org.springframework.transaction.annotation.Transactional
	public String cancelBooking(Integer ticketId) {
		Optional<Ticket> ticketOpt = ticketRepository.findById(ticketId);
		if (ticketOpt.isEmpty()) {
			throw new RuntimeException("Ticket booking with ID " + ticketId + " does not exist.");
		}

		Ticket ticket = ticketOpt.get();

		// 1. Release booked seats in the associated show
		Show show = ticket.getShow();
		if (show != null && ticket.getBookedSeats() != null) {
			String[] seats = ticket.getBookedSeats().split(",");
			java.util.Set<String> seatsToRelease = new java.util.HashSet<>();
			for (String s : seats) {
				if (s != null && !s.trim().isEmpty()) {
					seatsToRelease.add(s.trim());
				}
			}

			if (show.getShowSeatList() != null) {
				for (ShowSeat showSeat : show.getShowSeatList()) {
					if (seatsToRelease.contains(showSeat.getSeatNo())) {
						showSeat.setIsAvailable(Boolean.TRUE);
					}
				}
			}

			if (show.getTicketList() != null) {
				show.getTicketList().remove(ticket);
			}
			showRepository.save(show);
		}

		// 2. Remove ticket from user's list
		User user = ticket.getUser();
		if (user != null && user.getTicketList() != null) {
			user.getTicketList().remove(ticket);
			userRepository.save(user);
		}

		// 3. Delete ticket entity
		ticket.setUser(null);
		ticket.setShow(null);
		ticketRepository.delete(ticket);

		return "Booking successfully cancelled and deleted.";
	}

}
