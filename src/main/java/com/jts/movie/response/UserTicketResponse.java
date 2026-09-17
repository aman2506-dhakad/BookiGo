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
public class UserTicketResponse {
    private Integer ticketId;
    private Integer totalTicketsPrice;
    private String bookedSeats;
    private Date bookedAt;
    private String movieName;
    private String theaterName;
    private String theaterAddress;
    private Date showDate;
    private Time showTime;
}
