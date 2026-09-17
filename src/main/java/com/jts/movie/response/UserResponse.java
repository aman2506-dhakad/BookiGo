package com.jts.movie.response;

import com.jts.movie.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    private Integer id;
    private String name;
    private String emailId;
    private Integer age;
    private Gender gender;
    private String address;
    private String mobileNo;
    private String roles;
}
