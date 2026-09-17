package com.jts.movie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jts.movie.convertor.MovieConvertor;
import com.jts.movie.entities.Movie;
import com.jts.movie.exceptions.MovieAlreadyExist;
import com.jts.movie.repositories.MovieRepository;
import com.jts.movie.request.MovieRequest;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	public String addMovie(MovieRequest movieRequest) {
		Movie movieByName = movieRepository.findByMovieName(movieRequest.getMovieName());
		
		if (movieByName != null && movieByName.getLanguage() != null && movieByName.getLanguage().equals(movieRequest.getLanguage())) {
			throw new MovieAlreadyExist();
		}
		
		Movie movie = MovieConvertor.movieDtoToMovie(movieRequest);
		
		movieRepository.save(movie);
		return "The movie has been added successfully";
	}

	@Autowired
	private com.jts.movie.repositories.ShowRepository showRepository;

	public java.util.List<com.jts.movie.response.MovieResponse> getAllMovies() {
		return movieRepository.findAll().stream().map(m -> {
			java.util.List<com.jts.movie.enums.Genre> genreList = (m.getGenres() != null && !m.getGenres().isEmpty())
					? new java.util.ArrayList<>(m.getGenres())
					: (m.getGenre() != null ? java.util.List.of(m.getGenre()) : java.util.List.of());

			java.util.List<com.jts.movie.enums.Language> langList = (m.getLanguages() != null && !m.getLanguages().isEmpty())
					? new java.util.ArrayList<>(m.getLanguages())
					: (m.getLanguage() != null ? java.util.List.of(m.getLanguage()) : java.util.List.of());

			return com.jts.movie.response.MovieResponse.builder()
					.id(m.getId())
					.movieName(m.getMovieName())
					.duration(m.getDuration())
					.rating(m.getRating())
					.releaseDate(m.getReleaseDate())
					.genre(m.getGenre() != null ? m.getGenre() : (!genreList.isEmpty() ? genreList.get(0) : null))
					.language(m.getLanguage() != null ? m.getLanguage() : (!langList.isEmpty() ? langList.get(0) : null))
					.genres(genreList)
					.languages(langList)
					.posterUrl(m.getPosterUrl())
					.build();
		}).collect(java.util.stream.Collectors.toList());
	}

	@org.springframework.transaction.annotation.Transactional
	public String deleteMovie(Integer movieId) {
		java.util.Optional<Movie> movieOpt = movieRepository.findById(movieId);
		if (movieOpt.isEmpty()) {
			throw new com.jts.movie.exceptions.MovieDoesNotExists();
		}
		Movie movie = movieOpt.get();
		String movieName = movie.getMovieName();

		java.util.List<com.jts.movie.entities.Show> shows = movie.getShows();
		if (shows != null && !shows.isEmpty()) {
			for (com.jts.movie.entities.Show show : new java.util.ArrayList<>(shows)) {
				if (show.getTheater() != null && show.getTheater().getShowList() != null) {
					show.getTheater().getShowList().remove(show);
				}
				if (show.getTicketList() != null) {
					for (com.jts.movie.entities.Ticket ticket : show.getTicketList()) {
						if (ticket.getUser() != null && ticket.getUser().getTicketList() != null) {
							ticket.getUser().getTicketList().remove(ticket);
						}
					}
				}
				showRepository.delete(show);
			}
			shows.clear();
		}

		movieRepository.delete(movie);
		return "Movie '" + movieName + "' has been deleted successfully";
	}

}
