package com.jts.movie.response;

import java.sql.Date;
import java.util.List;

import com.jts.movie.enums.Genre;
import com.jts.movie.enums.Language;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MovieResponse {
    private Integer id;
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

