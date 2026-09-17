package com.jts.movie.response;

import java.sql.Date;
import java.sql.Time;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShowResponse {
    private Integer showId;
    private Time time;
    private Date date;
    private Integer movieId;
    private String movieName;
    private Integer theaterId;
    private String theaterName;
    private String theaterAddress;
}
