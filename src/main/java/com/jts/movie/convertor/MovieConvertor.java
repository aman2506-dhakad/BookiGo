package com.jts.movie.convertor;

import java.util.ArrayList;
import java.util.List;

import com.jts.movie.entities.Movie;
import com.jts.movie.enums.Genre;
import com.jts.movie.enums.Language;
import com.jts.movie.request.MovieRequest;

public class MovieConvertor {

    public static Movie movieDtoToMovie(MovieRequest movieRequest) {
        List<Genre> genres = new ArrayList<>();
        if (movieRequest.getGenres() != null && !movieRequest.getGenres().isEmpty()) {
            genres.addAll(movieRequest.getGenres());
        } else if (movieRequest.getGenre() != null) {
            genres.add(movieRequest.getGenre());
        }

        List<Language> languages = new ArrayList<>();
        if (movieRequest.getLanguages() != null && !movieRequest.getLanguages().isEmpty()) {
            languages.addAll(movieRequest.getLanguages());
        } else if (movieRequest.getLanguage() != null) {
            languages.add(movieRequest.getLanguage());
        }

        Genre primaryGenre = !genres.isEmpty() ? genres.get(0) : movieRequest.getGenre();
        Language primaryLanguage = !languages.isEmpty() ? languages.get(0) : movieRequest.getLanguage();

        Movie movie = Movie.builder()
                .movieName(movieRequest.getMovieName())
                .duration(movieRequest.getDuration())
                .genre(primaryGenre)
                .language(primaryLanguage)
                .genres(genres)
                .languages(languages)
                .releaseDate(movieRequest.getReleaseDate())
                .rating(movieRequest.getRating())
                .posterUrl(movieRequest.getPosterUrl())
                .build();

        return movie;
    }
}

