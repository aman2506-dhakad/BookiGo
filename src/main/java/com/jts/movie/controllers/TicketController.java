package com.jts.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jts.movie.request.TicketRequest;
import com.jts.movie.response.TicketResponse;
import com.jts.movie.services.TicketService;

@RestController
@RequestMapping("/ticket")
public class TicketController {

	@Autowired
	private TicketService ticketService;

	@PostMapping("/book")
	public ResponseEntity<Object> ticketBooking(@RequestBody TicketRequest ticketRequest) {
		try {
			TicketResponse result = ticketService.ticketBooking(ticketRequest);
			return new ResponseEntity<>(result, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@org.springframework.web.bind.annotation.GetMapping("/user/{userId}")
	public ResponseEntity<java.util.List<com.jts.movie.response.UserTicketResponse>> getUserTickets(
			@org.springframework.web.bind.annotation.PathVariable("userId") Integer userId) {
		return new ResponseEntity<>(ticketService.getUserTickets(userId), HttpStatus.OK);
	}

	@org.springframework.web.bind.annotation.DeleteMapping("/{ticketId}")
	public ResponseEntity<String> cancelBooking(@org.springframework.web.bind.annotation.PathVariable("ticketId") Integer ticketId) {
		try {
			String res = ticketService.cancelBooking(ticketId);
			return new ResponseEntity<>(res, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
