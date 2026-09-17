package com.jts.movie.response;

import com.jts.movie.enums.SeatType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShowSeatResponse {
    private Integer id;
    private String seatNo;
    private SeatType seatType;
    private Integer price;
    private Boolean isAvailable;
    private Boolean isFoodContains;
}
