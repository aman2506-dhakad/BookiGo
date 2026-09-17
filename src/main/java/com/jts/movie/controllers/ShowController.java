package com.jts.movie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jts.movie.request.ShowRequest;
import com.jts.movie.request.ShowSeatRequest;
import com.jts.movie.services.ShowService;

@RestController
@RequestMapping("/show")
public class ShowController {

	@Autowired
	private ShowService showService;

	@PostMapping("/addNew")
	public ResponseEntity<String> addShow(@RequestBody ShowRequest showRequest) {
		try {
			String result = showService.addShow(showRequest);
			return new ResponseEntity<>(result, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/associateSeats")
	public ResponseEntity<String> associateShowSeats(@RequestBody ShowSeatRequest showSeatRequest) {
		try {
			String result = showService.associateShowSeats(showSeatRequest);
			return new ResponseEntity<>(result, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@org.springframework.web.bind.annotation.GetMapping("/movie/{movieId}")
	public ResponseEntity<java.util.List<com.jts.movie.response.ShowResponse>> getShowsByMovie(
			@org.springframework.web.bind.annotation.PathVariable("movieId") Integer movieId) {
		return new ResponseEntity<>(showService.getShowsByMovie(movieId), HttpStatus.OK);
	}

	@org.springframework.web.bind.annotation.GetMapping("/{showId}/seats")
	public ResponseEntity<java.util.List<com.jts.movie.response.ShowSeatResponse>> getShowSeats(
			@org.springframework.web.bind.annotation.PathVariable("showId") Integer showId) {
		try {
			return new ResponseEntity<>(showService.getShowSeats(showId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
