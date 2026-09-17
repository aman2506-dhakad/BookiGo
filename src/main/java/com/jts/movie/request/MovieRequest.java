package com.jts.movie.request;

import lombok.Data;

import java.sql.Date;
import java.util.List;

import com.jts.movie.enums.Genre;
import com.jts.movie.enums.Language;

@Data
public class MovieRequest {
	private String movieName;
	private Integer duration;
	private Double rating;
	private Date releaseDate;
	private Genre genre;
	private Language language;
	private List<Genre> genres;
	private List<Language> languages;
	private String posterUrl;
}

