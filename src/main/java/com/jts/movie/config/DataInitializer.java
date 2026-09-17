package com.jts.movie.config;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.jts.movie.entities.Movie;
import com.jts.movie.entities.Show;
import com.jts.movie.entities.ShowSeat;
import com.jts.movie.entities.Theater;
import com.jts.movie.entities.TheaterSeat;
import com.jts.movie.entities.User;
import com.jts.movie.enums.Gender;
import com.jts.movie.enums.Genre;
import com.jts.movie.enums.Language;
import com.jts.movie.enums.SeatType;
import com.jts.movie.repositories.MovieRepository;
import com.jts.movie.repositories.ShowRepository;
import com.jts.movie.repositories.TheaterRepository;
import com.jts.movie.repositories.UserRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private TheaterRepository theaterRepository;

    @Autowired
    private ShowRepository showRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByEmailId("admin@cinemax.com").isEmpty()) {
            User admin = User.builder()
                    .name("Cinemax Admin")
                    .emailId("admin@cinemax.com")
                    .password(passwordEncoder.encode("Admin@123"))
                    .age(30)
                    .gender(Gender.MALE)
                    .address("Downtown Cinema Blvd")
                    .mobileNo("9876543210")
                    .roles("ROLE_ADMIN,ROLE_USER")
                    .build();
            userRepository.save(admin);
        }

        if (userRepository.findByEmailId("user@cinemax.com").isEmpty()) {
            User demoUser = User.builder()
                    .name("Alex Parker")
                    .emailId("user@cinemax.com")
                    .password(passwordEncoder.encode("User@123"))
                    .age(24)
                    .gender(Gender.MALE)
                    .address("742 Evergreen Terrace")
                    .mobileNo("9123456780")
                    .roles("ROLE_USER")
                    .build();
            userRepository.save(demoUser);
        }

        if (movieRepository.count() == 0) {
            // 1. Create Theaters
            Theater t1 = Theater.builder()
                    .name("PVR Director's Cut")
                    .address("Ambience Mall, Vasant Kunj, New Delhi")
                    .theaterSeatList(new ArrayList<>())
                    .showList(new ArrayList<>())
                    .build();
            t1 = theaterRepository.save(t1);
            populateTheaterSeats(t1, 6, 18, 12);
            theaterRepository.save(t1);

            Theater t2 = Theater.builder()
                    .name("INOX Megaplex IMAX")
                    .address("Inorbit Mall, Malad West, Mumbai")
                    .theaterSeatList(new ArrayList<>())
                    .showList(new ArrayList<>())
                    .build();
            t2 = theaterRepository.save(t2);
            populateTheaterSeats(t2, 6, 18, 12);
            theaterRepository.save(t2);

            Theater t3 = Theater.builder()
                    .name("Cinepolis VIP")
                    .address("Forum Shantiniketan, Whitefield, Bengaluru")
                    .theaterSeatList(new ArrayList<>())
                    .showList(new ArrayList<>())
                    .build();
            t3 = theaterRepository.save(t3);
            populateTheaterSeats(t3, 6, 18, 12);
            theaterRepository.save(t3);

            // 2. Create Movies
            Movie m1 = Movie.builder()
                    .movieName("Oppenheimer")
                    .duration(180)
                    .rating(8.9)
                    .releaseDate(Date.valueOf("2023-07-21"))
                    .genre(Genre.DRAMA)
                    .language(Language.ENGLISH)
                    .posterUrl("https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80")
                    .shows(new ArrayList<>())
                    .build();
            m1 = movieRepository.save(m1);

            Movie m2 = Movie.builder()
                    .movieName("Interstellar")
                    .duration(169)
                    .rating(8.7)
                    .releaseDate(Date.valueOf("2014-11-07"))
                    .genre(Genre.ACTION)
                    .language(Language.ENGLISH)
                    .posterUrl("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80")
                    .shows(new ArrayList<>())
                    .build();
            m2 = movieRepository.save(m2);

            Movie m3 = Movie.builder()
                    .movieName("Inception")
                    .duration(148)
                    .rating(8.8)
                    .releaseDate(Date.valueOf("2010-07-16"))
                    .genre(Genre.ACTION)
                    .language(Language.ENGLISH)
                    .posterUrl("https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80")
                    .shows(new ArrayList<>())
                    .build();
            m3 = movieRepository.save(m3);

            Movie m4 = Movie.builder()
                    .movieName("Spider-Man: Across the Spider-Verse")
                    .duration(140)
                    .rating(8.7)
                    .releaseDate(Date.valueOf("2023-06-02"))
                    .genre(Genre.ANIMATION)
                    .language(Language.ENGLISH)
                    .posterUrl("https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80")
                    .shows(new ArrayList<>())
                    .build();
            m4 = movieRepository.save(m4);

            Movie m5 = Movie.builder()
                    .movieName("Dune: Part Two")
                    .duration(166)
                    .rating(8.6)
                    .releaseDate(Date.valueOf("2024-03-01"))
                    .genre(Genre.ACTION)
                    .language(Language.ENGLISH)
                    .posterUrl("https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80")
                    .shows(new ArrayList<>())
                    .build();
            m5 = movieRepository.save(m5);

            // 3. Schedule Shows
            LocalDate today = LocalDate.now();
            Time[] times = new Time[]{
                Time.valueOf("11:00:00"),
                Time.valueOf("14:30:00"),
                Time.valueOf("18:00:00"),
                Time.valueOf("21:30:00")
            };

            Movie[] movies = new Movie[]{m1, m2, m3, m4, m5};
            Theater[] theaters = new Theater[]{t1, t2, t3};

            for (int dayOffset = 0; dayOffset <= 2; dayOffset++) {
                Date showDate = Date.valueOf(today.plusDays(dayOffset));
                for (int mIdx = 0; mIdx < movies.length; mIdx++) {
                    Movie movie = movies[mIdx];
                    Theater theater = theaters[mIdx % theaters.length];
                    Time showTime = times[mIdx % times.length];

                    createAndAssignShow(movie, theater, showDate, showTime, 250, 450);
                }
            }
        }

        // 4. Ensure 10+ premium theaters in Vadodara, Mumbai, Indore, and Bhopal are seeded
        seedCityTheaters();
    }

    private void seedCityTheaters() {
        class TheaterInfo {
            String name;
            String address;
            TheaterInfo(String name, String address) {
                this.name = name;
                this.address = address;
            }
        }

        List<TheaterInfo> cityTheaters = new ArrayList<>();
        // Vadodara (4 locations)
        cityTheaters.add(new TheaterInfo("INOX Race Course", "Race Course Circle, Alkapuri, Vadodara, Gujarat"));
        cityTheaters.add(new TheaterInfo("PVR Deep Cinema", "Opposite Akota Stadium, Akota, Vadodara, Gujarat"));
        cityTheaters.add(new TheaterInfo("Cinepolis Inorbit Mall", "Alembic Road, Subhanpura, Vadodara, Gujarat"));
        cityTheaters.add(new TheaterInfo("Carnival Cinemas Transcube", "Central Bus Station, Station Road, Vadodara, Gujarat"));

        // Mumbai (4 locations)
        cityTheaters.add(new TheaterInfo("PVR ICON Palladium", "High Street Phoenix, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra"));
        cityTheaters.add(new TheaterInfo("Cinepolis Viviana Megaplex", "Eastern Express Highway, Thane West, Mumbai, Maharashtra"));
        cityTheaters.add(new TheaterInfo("PVR Dynamix Mall", "Gulmohar Cross Road, Juhu Scheme, Vile Parle West, Mumbai, Maharashtra"));
        cityTheaters.add(new TheaterInfo("INOX R-City IMAX", "LBS Marg, Amrut Nagar, Ghatkopar West, Mumbai, Maharashtra"));

        // Indore (4 locations)
        cityTheaters.add(new TheaterInfo("INOX C21 Mall", "AB Road, Scheme 54, PU-4, Vijay Nagar, Indore, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("PVR Treasure Island Next", "South Tukoganj, RNT Marg, MG Road, Indore, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("Cinepolis Malhar Mega Mall", "Ring Road, Near Malhar Mall, Vijay Nagar, Indore, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("Velocity Multiplex", "Ring Road, Scheme 94, Eastern Ring Road, Indore, Madhya Pradesh"));

        // Bhopal (4 locations)
        cityTheaters.add(new TheaterInfo("Cinepolis DB City Mall", "Arera Hills, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("PVR Aura Mall", "Trilanga, Gulmohar Colony, Shahpura, Bhopal, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("INOX Century 21 Mall", "Hoshangabad Road, Misrod, Bhopal, Madhya Pradesh"));
        cityTheaters.add(new TheaterInfo("Aashima Cinepolis Multiplex", "Aashima The Lake City Mall, Hoshangabad Road, Bhopal, Madhya Pradesh"));

        List<Theater> allExisting = theaterRepository.findAll();
        List<Movie> allMovies = movieRepository.findAll();
        LocalDate today = LocalDate.now();
        Time[] times = new Time[]{
            Time.valueOf("11:30:00"),
            Time.valueOf("15:00:00"),
            Time.valueOf("18:30:00"),
            Time.valueOf("21:45:00")
        };

        for (TheaterInfo info : cityTheaters) {
            boolean exists = allExisting.stream().anyMatch(t -> t.getName().equalsIgnoreCase(info.name));
            if (!exists) {
                Theater t = Theater.builder()
                        .name(info.name)
                        .address(info.address)
                        .theaterSeatList(new ArrayList<>())
                        .showList(new ArrayList<>())
                        .build();
                t = theaterRepository.save(t);
                populateTheaterSeats(t, 6, 18, 12);
                t = theaterRepository.save(t);

                // Schedule shows across movies for today and next 2 days
                if (!allMovies.isEmpty()) {
                    for (int dayOffset = 0; dayOffset <= 2; dayOffset++) {
                        Date showDate = Date.valueOf(today.plusDays(dayOffset));
                        for (int mIdx = 0; mIdx < allMovies.size(); mIdx++) {
                            Movie movie = allMovies.get(mIdx);
                            Time showTime = times[(mIdx + dayOffset) % times.length];
                            createAndAssignShow(movie, t, showDate, showTime, 250, 450);
                        }
                    }
                }
            }
        }
    }

    private void populateTheaterSeats(Theater theater, int seatsInRow, int classicCount, int premiumCount) {
        List<TheaterSeat> list = theater.getTheaterSeatList();
        int counter = 1;
        int fill = 0;
        char ch = 'A';

        for (int i = 1; i <= classicCount; i++) {
            String seatNo = "" + counter + ch;
            ch++;
            fill++;
            if (fill == seatsInRow) {
                fill = 0;
                counter++;
                ch = 'A';
            }
            TheaterSeat seat = new TheaterSeat();
            seat.setSeatNo(seatNo);
            seat.setSeatType(SeatType.CLASSIC);
            seat.setTheater(theater);
            list.add(seat);
        }

        for (int i = 1; i <= premiumCount; i++) {
            String seatNo = "" + counter + ch;
            ch++;
            fill++;
            if (fill == seatsInRow) {
                fill = 0;
                counter++;
                ch = 'A';
            }
            TheaterSeat seat = new TheaterSeat();
            seat.setSeatNo(seatNo);
            seat.setSeatType(SeatType.PREMIUM);
            seat.setTheater(theater);
            list.add(seat);
        }
    }

    private void createAndAssignShow(Movie movie, Theater theater, Date date, Time time, int classicPrice, int premiumPrice) {
        Show show = Show.builder()
                .date(date)
                .time(time)
                .movie(movie)
                .theater(theater)
                .showSeatList(new ArrayList<>())
                .ticketList(new ArrayList<>())
                .build();
        show = showRepository.save(show);

        List<ShowSeat> showSeatList = show.getShowSeatList();
        for (TheaterSeat tSeat : theater.getTheaterSeatList()) {
            ShowSeat sSeat = new ShowSeat();
            sSeat.setSeatNo(tSeat.getSeatNo());
            sSeat.setSeatType(tSeat.getSeatType());
            sSeat.setPrice(tSeat.getSeatType() == SeatType.CLASSIC ? classicPrice : premiumPrice);
            sSeat.setShow(show);
            sSeat.setIsAvailable(true);
            sSeat.setIsFoodContains(false);
            showSeatList.add(sSeat);
        }

        showRepository.save(show);
    }
}
