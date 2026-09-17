package com.jts.movie.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jts.movie.convertor.ShowConvertor;
import com.jts.movie.entities.Movie;
import com.jts.movie.entities.Show;
import com.jts.movie.entities.ShowSeat;
import com.jts.movie.entities.Theater;
import com.jts.movie.entities.TheaterSeat;
import com.jts.movie.enums.SeatType;
import com.jts.movie.exceptions.MovieDoesNotExists;
import com.jts.movie.exceptions.ShowDoesNotExists;
import com.jts.movie.exceptions.TheaterDoesNotExists;
import com.jts.movie.repositories.MovieRepository;
import com.jts.movie.repositories.ShowRepository;
import com.jts.movie.repositories.TheaterRepository;
import com.jts.movie.request.ShowRequest;
import com.jts.movie.request.ShowSeatRequest;

@Service
public class ShowService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private TheaterRepository theaterRepository;

	@Autowired
	private ShowRepository showRepository;

	public String addShow(ShowRequest showRequest) {
		Show show = ShowConvertor.showDtoToShow(showRequest);

		Optional<Movie> movieOpt = Optional.empty();
		if (showRequest.getMovieId() != null) {
			movieOpt = movieRepository.findById(showRequest.getMovieId());
		} else if (showRequest.getMovieName() != null && !showRequest.getMovieName().trim().isEmpty()) {
			movieOpt = Optional.ofNullable(movieRepository.findByMovieName(showRequest.getMovieName().trim()));
		}

		if (movieOpt.isEmpty()) {
			throw new MovieDoesNotExists();
		}

		if (showRequest.getTheaterId() == null) {
			throw new TheaterDoesNotExists();
		}

		Optional<Theater> theaterOpt = theaterRepository.findById(showRequest.getTheaterId());

		if (theaterOpt.isEmpty()) {
			throw new TheaterDoesNotExists();
		}

		Theater theater = theaterOpt.get();
		Movie movie = movieOpt.get();

		show.setMovie(movie);
		show.setTheater(theater);
		show = showRepository.save(show);

		if (movie.getShows() == null) {
			movie.setShows(new java.util.ArrayList<>());
		}
		movie.getShows().add(show);

		if (theater.getShowList() == null) {
			theater.setShowList(new java.util.ArrayList<>());
		}
		theater.getShowList().add(show);

		movieRepository.save(movie);
		theaterRepository.save(theater);

		// Automatically associate seats from theater if available, or generate standard seating
		List<TheaterSeat> theaterSeatList = theater.getTheaterSeatList();
		int classicPrice = showRequest.getPriceOfClassicSeat() != null ? showRequest.getPriceOfClassicSeat() : 250;
		int premiumPrice = showRequest.getPriceOfPremiumSeat() != null ? showRequest.getPriceOfPremiumSeat() : 450;
		List<ShowSeat> showSeatList = show.getShowSeatList();
		if (showSeatList == null) {
			showSeatList = new java.util.ArrayList<>();
			show.setShowSeatList(showSeatList);
		}

		if (theaterSeatList != null && !theaterSeatList.isEmpty()) {
			for (TheaterSeat theaterSeat : theaterSeatList) {
				ShowSeat showSeat = new ShowSeat();
				showSeat.setSeatNo(theaterSeat.getSeatNo());
				showSeat.setSeatType(theaterSeat.getSeatType());
				showSeat.setPrice(showSeat.getSeatType().equals(SeatType.CLASSIC) ? classicPrice : premiumPrice);
				showSeat.setShow(show);
				showSeat.setIsAvailable(Boolean.TRUE);
				showSeat.setIsFoodContains(Boolean.FALSE);
				showSeatList.add(showSeat);
			}
		} else {
			generateDefaultSeats(show, showSeatList, classicPrice, premiumPrice);
		}
		showRepository.save(show);

		return "Show has been added Successfully";
	}

	private void generateDefaultSeats(Show show, List<ShowSeat> showSeatList, int classicPrice, int premiumPrice) {
		int seatsInRow = 6;
		int classicCount = 18;
		int premiumCount = 12;
		int counter = 1;
		int fill = 0;
		char ch = 'A';

		for (int i = 1; i <= classicCount; i++) {
			String seatNo = "" + counter + ch;
			ch++;
			fill++;
			if (fill == seatsInRow) {
				fill = 0;
				counter++;
				ch = 'A';
			}
			ShowSeat s = new ShowSeat();
			s.setSeatNo(seatNo);
			s.setSeatType(SeatType.CLASSIC);
			s.setPrice(classicPrice);
			s.setShow(show);
			s.setIsAvailable(Boolean.TRUE);
			s.setIsFoodContains(Boolean.FALSE);
			showSeatList.add(s);
		}

		for (int i = 1; i <= premiumCount; i++) {
			String seatNo = "" + counter + ch;
			ch++;
			fill++;
			if (fill == seatsInRow) {
				fill = 0;
				counter++;
				ch = 'A';
			}
			ShowSeat s = new ShowSeat();
			s.setSeatNo(seatNo);
			s.setSeatType(SeatType.PREMIUM);
			s.setPrice(premiumPrice);
			s.setShow(show);
			s.setIsAvailable(Boolean.TRUE);
			s.setIsFoodContains(Boolean.FALSE);
			showSeatList.add(s);
		}
	}

	public String associateShowSeats(ShowSeatRequest showSeatRequest) throws ShowDoesNotExists {
		Optional<Show> showOpt = showRepository.findById(showSeatRequest.getShowId());

		if (showOpt.isEmpty()) {
			throw new ShowDoesNotExists();
		}

		Show show = showOpt.get();
		Theater theater = show.getTheater();

		List<TheaterSeat> theaterSeatList = theater.getTheaterSeatList();

		List<ShowSeat> showSeatList = show.getShowSeatList();

		for (TheaterSeat theaterSeat : theaterSeatList) {
			ShowSeat showSeat = new ShowSeat();
			showSeat.setSeatNo(theaterSeat.getSeatNo());
			showSeat.setSeatType(theaterSeat.getSeatType());

			if (showSeat.getSeatType().equals(SeatType.CLASSIC)) {
				showSeat.setPrice((showSeatRequest.getPriceOfClassicSeat()));
			} else {
				showSeat.setPrice(showSeatRequest.getPriceOfPremiumSeat());
			}

			showSeat.setShow(show);
			showSeat.setIsAvailable(Boolean.TRUE);
			showSeat.setIsFoodContains(Boolean.FALSE);

			showSeatList.add(showSeat);
		}

		showRepository.save(show);

		return "Show seats have been associated successfully";
	}

	public java.util.List<com.jts.movie.response.ShowResponse> getShowsByMovie(Integer movieId) {
		return showRepository.getAllShowsOfMovie(movieId).stream().map(s -> com.jts.movie.response.ShowResponse.builder()
				.showId(s.getShowId())
				.date(s.getDate())
				.time(s.getTime())
				.movieId(s.getMovie() != null ? s.getMovie().getId() : null)
				.movieName(s.getMovie() != null ? s.getMovie().getMovieName() : null)
				.theaterId(s.getTheater() != null ? s.getTheater().getId() : null)
				.theaterName(s.getTheater() != null ? s.getTheater().getName() : null)
				.theaterAddress(s.getTheater() != null ? s.getTheater().getAddress() : null)
				.build()
		).collect(java.util.stream.Collectors.toList());
	}

	@org.springframework.transaction.annotation.Transactional
	public java.util.List<com.jts.movie.response.ShowSeatResponse> getShowSeats(Integer showId) {
		Optional<Show> showOpt = showRepository.findById(showId);
		if (showOpt.isEmpty()) {
			throw new ShowDoesNotExists();
		}
		Show show = showOpt.get();
		List<ShowSeat> showSeatList = show.getShowSeatList();
		if (showSeatList == null || showSeatList.isEmpty()) {
			if (showSeatList == null) {
				showSeatList = new java.util.ArrayList<>();
				show.setShowSeatList(showSeatList);
			}
			Theater theater = show.getTheater();
			List<TheaterSeat> theaterSeatList = (theater != null) ? theater.getTheaterSeatList() : null;
			if (theaterSeatList != null && !theaterSeatList.isEmpty()) {
				for (TheaterSeat theaterSeat : theaterSeatList) {
					ShowSeat showSeat = new ShowSeat();
					showSeat.setSeatNo(theaterSeat.getSeatNo());
					showSeat.setSeatType(theaterSeat.getSeatType());
					showSeat.setPrice(theaterSeat.getSeatType().equals(SeatType.CLASSIC) ? 250 : 450);
					showSeat.setShow(show);
					showSeat.setIsAvailable(Boolean.TRUE);
					showSeat.setIsFoodContains(Boolean.FALSE);
					showSeatList.add(showSeat);
				}
			} else {
				generateDefaultSeats(show, showSeatList, 250, 450);
			}
			show = showRepository.save(show);
		}

		return show.getShowSeatList().stream().map(seat -> com.jts.movie.response.ShowSeatResponse.builder()
				.id(seat.getId())
				.seatNo(seat.getSeatNo())
				.seatType(seat.getSeatType())
				.price(seat.getPrice())
				.isAvailable(seat.getIsAvailable())
				.isFoodContains(seat.getIsFoodContains())
				.build()
		).collect(java.util.stream.Collectors.toList());
	}
}
