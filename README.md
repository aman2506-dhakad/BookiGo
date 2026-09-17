# Bookigo — Movie Ticket Booking System

A full-stack, enterprise-grade Movie Ticket Booking Web Application and RESTful backend inspired by platforms like **BookMyShow**. Built with **Spring Boot 3**, **Spring Security 6**, **JJWT**, **Spring Data JPA**, **MySQL**, and a dark-mode **HTML5/CSS3/JavaScript** frontend.

---

## 🌟 Features

### 🎬 Customer Web Experience

- **Hero Spotlight Banner:** Featured blockbusters with IMDb ratings, genres, release metadata, and direct booking actions.
- **Now Showing Catalog:** Browse active movies with high-resolution poster artwork, real-time search, and genre filter chips (_Action, Drama, Animation, Thriller, Comedy_).
- **Multi-Day Showtime & Venue Selector:** Choose dates and theater halls (_PVR Director's Cut, INOX Megaplex IMAX, Cinepolis VIP_) with screening format badges.
- **Interactive Cinema Seat Matrix:**
  - Curved glowing screen representation (_"All eyes towards screen"_).
  - Color-coded seat tiers: **Classic (₹250)** and **VIP/Premium (₹450)**.
  - Real-time seat status indicators: _Available_, _Selected_, and _Sold Out_.
  - Live price calculation as seats are selected or unselected.
- **Digital E-Ticket Receipt:** Instant booking confirmation displaying generated barcode, booking reference code (`CNX-XXXXXX`), reserved seats, venue, showtime, and print/download action.
- **My Bookings Drawer:** Track all past reservations and confirmed tickets.
- **User Authentication:** Tabbed Sign In and Sign Up modal with JWT token management and 1-click demo credential fillers.

### ⚙️ Backend Architecture

- **JWT & Spring Security 6:** Role-based access control (`ROLE_USER`, `ROLE_ADMIN`) with stateless session management.
- **Automatic Data Seeder (`DataInitializer`):** Pre-populates the database on first startup with sample movies (_Oppenheimer, Interstellar, Inception, Spider-Man, Dune: Part Two_), theater halls, seats, shows, and demo users.
- **Interactive API Documentation:** Integrated Swagger UI / OpenAPI 3.0.

---

## 🛠️ Technologies Used

### Backend

- **Java 17+**
- **Spring Boot 3.3.0**
- **Spring Security 6** (Stateless authentication & Authorization filters)
- **JJWT 0.11.5** (`jjwt-api`, `jjwt-impl`, `jjwt-jackson`)
- **Spring Data JPA & Hibernate 6**
- **MySQL 8.0**
- **SpringDoc OpenAPI 2.5.0** (Swagger UI)
- **Project Lombok**
- **Maven 3+**

### Frontend

- **HTML5 & Semantic Elements**
- **Modern Vanilla CSS3** (Custom properties, Glassmorphism, CSS Grid, Flexbox, Animations)
- **Vanilla JavaScript (ES6+)** (Fetch API, DOM manipulation, state management)
- **Google Fonts** (_Outfit_ & _Plus Jakarta Sans_)

---

## 🚀 Getting Started

### 1. Prerequisites

- **Java Development Kit (JDK 17 or higher)**
- **Apache Maven 3.6+**
- **MySQL Server 8.0+** running locally on port `3306`

### 2. Configure Database

Open [src/main/resources/application.properties](file:///src/main/resources/application.properties) and update your database credentials:

```properties
spring.application.name=movie-ticket-booking-system

spring.datasource.url=jdbc:mysql://localhost:3306/movie_ticket_booking?createTableIfNotExists=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

### 3. Build & Install

Build the project using Maven:

```bash
mvn clean install -DskipTests
```

### 4. Run Application

Start the Spring Boot server:

```bash
mvn spring-boot:run
```

Once started, the application will be live at:
👉 **[http://localhost:8080/](http://localhost:8080/)**

---

## 🔑 Demo Accounts

The application automatically seeds the following accounts for immediate testing:

| Role              | Email Address       | Password    | Permissions                                                          |
| ----------------- | ------------------- | ----------- | -------------------------------------------------------------------- |
| **Standard User** | `user@cinemax.com`  | `User@123`  | Browse catalog, select seats, book tickets, view booking history     |
| **Administrator** | `admin@cinemax.com` | `Admin@123` | Full access + Add movies, theaters, seat layouts, and schedule shows |

_(You can also use the **"⚡ 1-Click Demo Accounts"** buttons in the Sign In modal)._

---

## 📚 REST API Endpoints

### 👤 User Endpoints

| Method | Endpoint                | Description                       | Auth Required |
| ------ | ----------------------- | --------------------------------- | ------------- |
| `POST` | `/user/addNew`          | Register a new user               | Public        |
| `POST` | `/user/getToken`        | Authenticate & retrieve JWT token | Public        |
| `GET`  | `/user/byEmail/{email}` | Retrieve user profile details     | Public        |

### 🎞️ Movie Endpoints

| Method | Endpoint        | Description                | Auth Required |
| ------ | --------------- | -------------------------- | ------------- |
| `GET`  | `/movie/all`    | Get all available movies   | Public        |
| `POST` | `/movie/addNew` | Add a new movie to catalog | `ROLE_ADMIN`  |

### 🎭 Theater Endpoints

| Method | Endpoint                  | Description                        | Auth Required |
| ------ | ------------------------- | ---------------------------------- | ------------- |
| `GET`  | `/theater/all`            | List all theaters & venues         | Public        |
| `POST` | `/theater/addNew`         | Add a new theater                  | `ROLE_ADMIN`  |
| `POST` | `/theater/addTheaterSeat` | Configure theater seating capacity | `ROLE_ADMIN`  |

### 🎟️ Show & Seat Endpoints

| Method | Endpoint                | Description                          | Auth Required |
| ------ | ----------------------- | ------------------------------------ | ------------- |
| `GET`  | `/show/movie/{movieId}` | Get all scheduled shows for a movie  | Public        |
| `GET`  | `/show/{showId}/seats`  | Get real-time seat matrix for a show | Public        |
| `POST` | `/show/addNew`          | Schedule a new show                  | `ROLE_ADMIN`  |
| `POST` | `/show/associateSeats`  | Allocate seats and pricing to a show | `ROLE_ADMIN`  |

### 🎫 Booking Endpoints

| Method | Endpoint                | Description                     | Auth Required              |
| ------ | ----------------------- | ------------------------------- | -------------------------- |
| `POST` | `/ticket/book`          | Book requested seats for a show | `ROLE_USER` / `ROLE_ADMIN` |
| `GET`  | `/ticket/user/{userId}` | Get booking history for a user  | Public                     |

---

## 📖 Swagger API Documentation

Interactive OpenAPI documentation and API explorer can be accessed at:
👉 **[http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)**

---

## 📂 Project Structure

```
movie-ticket-booking-system/
├── src/
│   ├── main/
│   │   ├── java/com/jts/movie/
│   │   │   ├── config/             # Security, JWT filters & DataInitializer
│   │   │   ├── controllers/        # REST Controllers (Movie, Show, Theater, Ticket, User)
│   │   │   ├── convertor/          # Entity <-> DTO mappers
│   │   │   ├── entities/           # JPA Database entities
│   │   │   ├── enums/              # Genres, Languages, SeatTypes, Genders
│   │   │   ├── exceptions/         # Custom exception handlers
│   │   │   ├── repositories/       # Spring Data JPA Repositories
│   │   │   ├── request/            # Request Payload DTOs
│   │   │   ├── response/           # Response Payload DTOs
│   │   │   └── services/           # Business logic layer
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/             # Frontend Web Application
│   │           ├── css/
│   │           │   └── style.css   # Dark-mode cinema stylesheet
│   │           ├── js/
│   │           │   └── app.js      # Interactive booking & state management
│   │           └── index.html      # Main Single Page Application (SPA)
└── pom.xml
```
