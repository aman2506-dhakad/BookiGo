# <p align="center"><img src="src/main/resources/static/images/bookigo-logo.png" alt="BookiGo Logo" width="220" /><br><b>BookiGo — Premium Movie Ticket Booking System</b></p>

<p align="center">
  <a href="https://spring.io/projects/spring-boot"><img src="https://img.shields.io/badge/Spring%20Boot-3.3.0-brightgreen.svg?logo=springboot&logoColor=white" alt="Spring Boot" /></a>
  <a href="https://www.oracle.com/java/"><img src="https://img.shields.io/badge/Java-17%2B-orange.svg?logo=openjdk&logoColor=white" alt="Java 17" /></a>
  <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-8.0-blue.svg?logo=mysql&logoColor=white" alt="MySQL" /></a>
  <a href="https://jwt.io/"><img src="https://img.shields.io/badge/JWT-Stateless%20Auth-red.svg?logo=jsonwebtokens&logoColor=white" alt="JWT" /></a>
  <a href="https://swagger.io/"><img src="https://img.shields.io/badge/OpenAPI-3.0%20Swagger-85EA2D.svg?logo=swagger&logoColor=black" alt="Swagger" /></a>
  <a href="https://github.com/aman2506-dhakad/BookiGo/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-purple.svg" alt="License" /></a>
</p>

---

## 📖 Overview

**BookiGo** is a full-stack, enterprise-grade Movie Ticket Booking Web Platform and RESTful service inspired by platforms like **BookMyShow**. It features a modern, reactive single-page architecture built with **Spring Boot 3**, **Spring Security 6**, **JJWT**, **Spring Data JPA**, **MySQL**, and a dark-mode **HTML5/CSS3/JavaScript** frontend with vibrant glassmorphic UI, real-time cinema seating matrix, interactive booking management, and role-based administration.

---

## 🌟 Key Features

### 🎬 Customer Experience
- **Dynamic Hero Showcase:** Auto-sliding cinema banner with smooth transitions, IMDb ratings, genre tags, and direct one-click booking.
- **Rich Movie Catalog:** Instant client-side search, genre filters (_Action, Drama, Animation, Thriller, Sci-Fi, Comedy_), and high-resolution posters.
- **Multi-City Theaters:** Support for 15+ premier cinema venues across **Mumbai**, **Indore**, **Bhopal**, and **Vadodara** with screening badges (_IMAX 3D, Dolby Atmos, 4DX, VIP Lounge_).
- **Interactive Seat Matrix:**
  - Curved glowing screen representation.
  - Color-coded seat tiers: **Classic (₹250)** and **VIP (₹450)**.
  - Real-time seat statuses: _Available_, _Selected_, and _Sold Out_.
  - Live price calculation and validation.
- **Instant Digital E-Ticket:** Barcoded confirmation receipt (`BKG-XXXXXX`) with theater name, showtime, booked seats, and printable summary.
- **Universal User Profile & Bookings:**
  - View user details (Name, Email, Phone, Age, Gender, Role).
  - Manage and review active bookings in real time.
  - **Inline Booking Cancellation:** Safe inline seat release without browser popup blocking (`Release seats? [Yes, Delete] [Keep]`).

### 👑 Administrator Suite
- **Movie Management:** Publish new movies or delete existing titles directly from the catalog.
- **Venue & Screen Configuration:** Create and configure theater halls with customizable seating layouts.
- **Show Scheduling:** Schedule shows across dates, assign time slots, and associate real-time seat matrices.

### 🛡️ Architecture & Security
- **Stateless JWT Security:** Spring Security 6 with token authentication filters and BCrypt password encryption.
- **Role-Based Access Control (RBAC):** Public endpoints, `ROLE_USER` booking access, and protected `ROLE_ADMIN` operations.
- **Interactive OpenAPI Documentation:** Integrated Swagger UI for testing API endpoints.
- **Automated Data Seeder:** Initializes sample movies, theaters across major cities, shows, seats, and test accounts on first boot.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend** | Spring Boot 3.3.0, Spring MVC, Spring Data JPA, Spring Security 6 |
| **Authentication** | JJWT (Java JWT 0.11.5), BCrypt Password Encoder |
| **Database** | MySQL 8.0 with Hibernate ORM 6 |
| **API Documentation** | SpringDoc OpenAPI 2.5.0 (Swagger UI) |
| **Frontend** | Vanilla HTML5, Modern CSS3 (Glassmorphism, CSS Grid, Micro-animations), ES6+ JavaScript |
| **Typography & Icons** | Google Fonts (_Outfit_, _Plus Jakarta Sans_) |
| **Build & Tooling** | Apache Maven 3.8+, Lombok |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Java Development Kit (JDK 17 or higher)**
- **Apache Maven 3.6+**
- **MySQL Server 8.0+** running on `localhost:3306`

### 2. Configure MySQL Database
Create your database and update [`src/main/resources/application.properties`](src/main/resources/application.properties):

```properties
spring.application.name=movie-ticket-booking-system

spring.datasource.url=jdbc:mysql://localhost:3306/movie_ticket_booking?createTableIfNotExists=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

### 3. Build the Project
```bash
mvn clean install -DskipTests
```

### 4. Run the Application
```bash
mvn spring-boot:run
```

Once started, access the application in your browser:
- **Web Application:** [http://localhost:8080/](http://localhost:8080/)
- **Swagger UI:** [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

---

## 🔑 Demo Credentials

| Role | Email | Password | Access Capabilities |
| :--- | :--- | :--- | :--- |
| **Standard User** | `user@cinemax.com` | `User@123` | Browse catalog, select seats, book tickets, view & cancel bookings |
| **Administrator** | `admin@cinemax.com` | `Admin@123` | Full admin privileges: Add/delete movies, create venues & schedules |

*(You can also use the quick 1-click credential buttons in the Sign In modal).*

---

## 📚 REST API Reference

### 👤 Authentication & Users
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/user/addNew` | Register a new user | Public |
| `POST` | `/user/getToken` | Authenticate & receive JWT token | Public |
| `GET` | `/user/byEmail/{email}` | Retrieve user profile details | Public |

### 🎞️ Movies
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/movie/all` | Fetch all movies | Public |
| `POST` | `/movie/addNew` | Add a new movie | `ROLE_ADMIN` |
| `DELETE` | `/movie/delete/{movieId}` | Delete a movie from catalog | `ROLE_ADMIN` |

### 🎭 Theaters & Venues
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/theater/all` | List all theaters across cities | Public |
| `POST` | `/theater/addNew` | Create a new theater | `ROLE_ADMIN` |
| `POST` | `/theater/addTheaterSeat` | Allocate seating capacity | `ROLE_ADMIN` |

### 🎟️ Shows & Seats
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/show/movie/{movieId}` | List scheduled shows for a movie | Public |
| `GET` | `/show/{showId}/seats` | Real-time seat layout for a show | Public |
| `POST` | `/show/addNew` | Schedule a new show | `ROLE_ADMIN` |
| `POST` | `/show/associateSeats` | Configure seat pricing and tiers | `ROLE_ADMIN` |

### 🎫 Bookings & Tickets
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/ticket/book` | Reserve and book selected seats | `ROLE_USER`, `ROLE_ADMIN` |
| `GET` | `/ticket/user/{userId}` | Retrieve user booking history | Public |
| `DELETE` | `/ticket/cancel/{ticketId}` | Cancel booking and release seats | `ROLE_USER`, `ROLE_ADMIN` |

---

## 📂 Project Architecture

```
BookiGo/
├── src/
│   ├── main/
│   │   ├── java/com/jts/movie/
│   │   │   ├── config/             # Spring Security, JWT Filters & DataInitializer
│   │   │   ├── controllers/        # REST Controllers (Movie, Show, Theater, Ticket, User)
│   │   │   ├── convertor/          # DTO <-> Entity Mappers
│   │   │   ├── entities/           # JPA Entities (Movie, Show, Theater, Seat, Ticket, User)
│   │   │   ├── enums/              # Genres, Languages, SeatTypes, Genders
│   │   │   ├── exceptions/         # Global Exception Handlers
│   │   │   ├── repositories/       # Spring Data JPA Repositories
│   │   │   ├── request/            # Request DTOs
│   │   │   ├── response/           # Response DTOs
│   │   │   └── services/           # Business Logic Layer
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/             # Single Page Application
│   │           ├── css/style.css   # Modern Dark-mode Stylesheet
│   │           ├── js/app.js       # Client State & Async Booking Logic
│   │           ├── images/         # Logo and Media Assets
│   │           └── index.html      # Main Landing & Booking UI
├── uploads/                        # User-uploaded movie posters
├── pom.xml                         # Maven Dependencies & Build Configuration
└── README.md                       # Documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
