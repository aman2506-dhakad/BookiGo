// Bookigo Movie Ticket Booking Application
const API_BASE = window.BOOKIGO_API_URL || '';

// Fallback Rich Catalog for Vercel / Cloud Demo Previews
const DEMO_MOVIES = [
    {
        "id":  12,
        "movieName":  "The Paradise",
        "duration":  169,
        "rating":  9.0,
        "releaseDate":  "2026-09-24",
        "genre":  "ACTION",
        "language":  "ENGLISH",
        "genres":  [
                       "ACTION",
                       "DRAMA",
                       "ADVENTURE"
                   ],
        "languages":  [
                          "ENGLISH",
                          "HINDI",
                          "TELUGU",
                          "TAMIL",
                          "KANNADA",
                          "MALAYALAM",
                          "BENGALI"
                      ],
        "posterUrl":  "/uploads/01c34d8e-4d25-406b-b308-e7e05dbe52e0.avif"
    },
    {
        "id":  13,
        "movieName":  "Hanuman Ansh",
        "duration":  150,
        "rating":  9.7,
        "releaseDate":  "2026-08-07",
        "genre":  "DRAMA",
        "language":  "HINDI",
        "genres":  [
                       "DRAMA",
                       "HISTORICAL"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/5f13e521-b43c-4f2d-9e0b-82cb300c8722.jpg"
    },
    {
        "id":  14,
        "movieName":  "The Vvaan - Force of the Forrest",
        "duration":  165,
        "rating":  8.5,
        "releaseDate":  "2026-09-25",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER",
                       "ADVENTURE",
                       "HISTORICAL",
                       "FANTASY"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/bbdbf193-4866-4d66-bd3f-a5168dac35d6.avif"
    },
    {
        "id":  15,
        "movieName":  "Drishyam: The Conclusion",
        "duration":  160,
        "rating":  8.3,
        "releaseDate":  "2026-10-02",
        "genre":  "DRAMA",
        "language":  "HINDI",
        "genres":  [
                       "DRAMA",
                       "THRILLER"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/2a72e418-1048-4ca7-9a3b-9416fca7326c.avif"
    },
    {
        "id":  16,
        "movieName":  "Rajini: The Jailer 2",
        "duration":  168,
        "rating":  9.3,
        "releaseDate":  "2026-10-15",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER"
                   ],
        "languages":  [
                          "HINDI",
                          "TELUGU",
                          "TAMIL"
                      ],
        "posterUrl":  "/uploads/b04f0890-6007-4c5f-9c99-999b9afb1e0a.avif"
    },
    {
        "id":  17,
        "movieName":  "OM Chapter 1: Udhiram",
        "duration":  165,
        "rating":  8.5,
        "releaseDate":  "2026-10-16",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER"
                   ],
        "languages":  [
                          "HINDI",
                          "TELUGU",
                          "TAMIL"
                      ],
        "posterUrl":  "/uploads/e3fb078e-473f-4535-a7fe-4dbfb246501d.avif"
    },
    {
        "id":  18,
        "movieName":  "Spirit",
        "duration":  180,
        "rating":  9.3,
        "releaseDate":  "2027-03-05",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER"
                   ],
        "languages":  [
                          "HINDI",
                          "TELUGU"
                      ],
        "posterUrl":  "/uploads/aa639b2b-ba64-4575-a8be-117415f4698c.avif"
    },
    {
        "id":  19,
        "movieName":  "Ramayana",
        "duration":  180,
        "rating":  9.4,
        "releaseDate":  "2026-11-06",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "DRAMA",
                       "ADVENTURE",
                       "HISTORICAL"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/444cc089-9e76-48d3-8476-dad8e7ef7489.avif"
    },
    {
        "id":  20,
        "movieName":  "King",
        "duration":  180,
        "rating":  8.2,
        "releaseDate":  "2026-12-24",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/e37080a5-e375-4c8b-8419-1518f7eb219e.avif"
    },
    {
        "id":  21,
        "movieName":  "Avengers: Doomsday",
        "duration":  165,
        "rating":  9.0,
        "releaseDate":  "2026-12-18",
        "genre":  "ACTION",
        "language":  "ENGLISH",
        "genres":  [
                       "ACTION",
                       "SCI_FI",
                       "ADVENTURE",
                       "FANTASY"
                   ],
        "languages":  [
                          "ENGLISH",
                          "HINDI",
                          "TELUGU",
                          "TAMIL"
                      ],
        "posterUrl":  "/uploads/3c6bde0b-eaa9-4640-9ded-b59b24509909.avif"
    },
    {
        "id":  22,
        "movieName":  "Haiwaan",
        "duration":  164,
        "rating":  5.9,
        "releaseDate":  "2026-09-11",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER",
                       "CRIME"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/1596a98a-4fb2-4caf-ad4a-3567e22faf91.avif"
    },
    {
        "id":  23,
        "movieName":  "Mirzapur: The Movie",
        "duration":  197,
        "rating":  9.1,
        "releaseDate":  "2026-09-04",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "THRILLER",
                       "CRIME"
                   ],
        "languages":  [
                          "HINDI",
                          "TELUGU"
                      ],
        "posterUrl":  "/uploads/1be741df-c40e-46bc-a04d-1938fffcaf5a.avif"
    },
    {
        "id":  24,
        "movieName":  "Toxic: A Fairy Tale for Grown-ups",
        "duration":  194,
        "rating":  5.0,
        "releaseDate":  "2026-08-26",
        "genre":  "ACTION",
        "language":  "ENGLISH",
        "genres":  [
                       "ACTION",
                       "THRILLER",
                       "CRIME"
                   ],
        "languages":  [
                          "ENGLISH",
                          "HINDI",
                          "TELUGU",
                          "TAMIL",
                          "KANNADA",
                          "MALAYALAM"
                      ],
        "posterUrl":  "/uploads/c1f7d9d2-ceac-4a5e-a841-229c54e9da04.avif"
    },
    {
        "id":  25,
        "movieName":  "Awarapan 2",
        "duration":  140,
        "rating":  7.9,
        "releaseDate":  "2026-08-14",
        "genre":  "ACTION",
        "language":  "HINDI",
        "genres":  [
                       "ACTION",
                       "ROMANTIC",
                       "CRIME"
                   ],
        "languages":  [
                          "HINDI"
                      ],
        "posterUrl":  "/uploads/c525f238-ad13-481e-b6e0-4618b9738106.avif"
    }
];

function generateDemoShows(movieId) {
  const movie = (state.movies && state.movies.find(m => m.id === movieId)) || DEMO_MOVIES[0];
  const theaters = [
    { id: 1, name: "PVR Director's Cut", address: "Vasant Kunj, South Delhi, Delhi" },
    { id: 2, name: "INOX Megaplex IMAX", address: "Inorbit Mall, Malad West, Mumbai, Maharashtra" },
    { id: 3, name: "Cinepolis VIP", address: "Seasons Mall, Magarpatta, Pune, Maharashtra" },
    { id: 4, name: "INOX Race Course", address: "Race Course Circle, Alkapuri, Vadodara, Gujarat" },
    { id: 5, name: "PVR Deep Cinema", address: "Akota Stadium, Vadodara, Gujarat" },
    { id: 6, name: "PVR ICON Palladium", address: "High Street Phoenix, Lower Parel, Mumbai, Maharashtra" },
    { id: 7, name: "INOX C21 Mall", address: "AB Road, Indore, Madhya Pradesh" },
    { id: 8, name: "Cinepolis DB City Mall", address: "Arera Hills, Bhopal, Madhya Pradesh" }
  ];

  const shows = [];
  const times = ["11:00:00", "14:30:00", "18:00:00", "21:30:00"];
  const today = new Date();

  for (let d = 0; d <= 3; d++) {
    const curDate = new Date(today);
    curDate.setDate(today.getDate() + d);
    const dateStr = curDate.toISOString().split('T')[0];

    theaters.forEach((t, tIdx) => {
      times.forEach((tm, tmIdx) => {
        shows.push({
          showId: (d * 100) + (t.id * 10) + tmIdx + 1,
          date: dateStr,
          time: tm,
          movieId: movie.id,
          movieName: movie.movieName,
          theaterId: t.id,
          theaterName: t.name,
          theaterAddress: t.address
        });
      });
    });
  }
  return shows;
}

function generateDemoSeats(showId) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const seats = [];
  const bookedSet = new Set(['B4', 'B5', 'C6', 'C7', 'E8', 'E9', 'F5', 'F6']);

  rows.forEach((row, rIdx) => {
    const isPremium = rIdx >= 5;
    for (let c = 1; c <= seatsPerRow; c++) {
      const seatNo = `${row}${c}`;
      seats.push({
        id: (rIdx * 100) + c,
        seatNo: seatNo,
        seatType: isPremium ? 'PREMIUM' : 'CLASSIC',
        price: isPremium ? 450 : 250,
        isAvailable: !bookedSet.has(seatNo)
      });
    }
  });
  return seats;
}

const API = {
  getMovies: async () => {
    try {
      const r = await fetch(`${API_BASE}/movie/all`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      if (Array.isArray(data) && data.length > 0) return data;
      return DEMO_MOVIES;
    } catch (e) {
      console.warn('Backend unavailable, using interactive demo catalog:', e);
      return DEMO_MOVIES;
    }
  },
  getShowsByMovie: async (movieId) => {
    try {
      const r = await fetch(`${API_BASE}/show/movie/${movieId}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      if (Array.isArray(data) && data.length > 0) return data;
      return generateDemoShows(movieId);
    } catch (e) {
      return generateDemoShows(movieId);
    }
  },
  getShowSeats: async (showId) => {
    try {
      const r = await fetch(`${API_BASE}/show/${showId}/seats`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      return generateDemoSeats(showId);
    }
  },
  getTheaters: async () => {
    try {
      const r = await fetch(`${API_BASE}/theater/all`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      return [
        { id: 1, name: "PVR Director's Cut", address: "Vasant Kunj, South Delhi, Delhi" },
        { id: 2, name: "INOX Megaplex IMAX", address: "Inorbit Mall, Malad West, Mumbai, Maharashtra" },
        { id: 3, name: "Cinepolis VIP", address: "Seasons Mall, Magarpatta, Pune, Maharashtra" },
        { id: 4, name: "INOX Race Course", address: "Race Course Circle, Alkapuri, Vadodara, Gujarat" },
        { id: 5, name: "PVR Deep Cinema", address: "Akota Stadium, Vadodara, Gujarat" },
        { id: 6, name: "PVR ICON Palladium", address: "High Street Phoenix, Lower Parel, Mumbai, Maharashtra" },
        { id: 7, name: "INOX C21 Mall", address: "AB Road, Indore, Madhya Pradesh" },
        { id: 8, name: "Cinepolis DB City Mall", address: "Arera Hills, Bhopal, Madhya Pradesh" }
      ];
    }
  },
  getUserTickets: async (userId) => {
    const localBookings = JSON.parse(localStorage.getItem('bookigo_local_bookings') || '[]');
    try {
      const r = await fetch(`${API_BASE}/ticket/user/${userId}`);
      if (r.ok) {
        const remote = await r.json();
        return [...localBookings, ...remote];
      }
      return localBookings;
    } catch (e) {
      return localBookings;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const r = await fetch(`${API_BASE}/user/byEmail/${encodeURIComponent(email)}`);
      if (r.ok) return await r.json();
    } catch (e) {}
    const isAdminUser = email.toLowerCase().includes('admin');
    return {
      id: isAdminUser ? 1 : 2,
      name: isAdminUser ? "Bookigo Admin" : "Alex Parker",
      emailId: email,
      age: 24,
      gender: "MALE",
      mobileNo: "9876543210",
      address: "Mumbai, Maharashtra",
      roles: isAdminUser ? "ROLE_ADMIN,ROLE_USER" : "ROLE_USER"
    };
  },
  login: async (credentials) => {
    try {
      const r = await fetch(`${API_BASE}/user/getToken`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      if (r.ok) return await r.text();
    } catch (e) {}
    if (credentials.email === 'admin@cinemax.com' && credentials.password === 'Admin@123') {
      return 'demo_admin_jwt_token_bookigo';
    }
    if (credentials.email === 'user@cinemax.com' && credentials.password === 'User@123') {
      return 'demo_user_jwt_token_bookigo';
    }
    return 'demo_jwt_token_bookigo';
  },
  signup: async (userData) => {
    try {
      const r = await fetch(`${API_BASE}/user/addNew`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (r.ok) return await r.text();
      const msg = await r.text();
      throw new Error(msg || 'Sign up failed');
    } catch (e) {
      return "User registered successfully";
    }
  },
  bookTicket: async (ticketRequest, token) => {
    try {
      const r = await fetch(`${API_BASE}/ticket/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(ticketRequest)
      });
      if (r.ok) return await r.json();
    } catch (e) {}
    
    // Create authentic offline ticket receipt
    const demoTicket = {
      ticketId: Math.floor(Math.random() * 90000) + 10000,
      allotedSeats: Array.isArray(ticketRequest.requestSeats) ? ticketRequest.requestSeats.join(', ') : 'A1, A2',
      amount: (ticketRequest.requestSeats ? ticketRequest.requestSeats.length : 2) * 350,
      movieName: state.activeMovie ? state.activeMovie.movieName : 'Oppenheimer',
      theaterName: state.selectedShow ? state.selectedShow.theaterName : 'PVR Director\'s Cut',
      showDate: state.selectedShow ? state.selectedShow.date : new Date().toISOString().split('T')[0],
      showTime: state.selectedShow ? state.selectedShow.time : '07:30 PM'
    };
    const localBookings = JSON.parse(localStorage.getItem('bookigo_local_bookings') || '[]');
    localBookings.unshift(demoTicket);
    localStorage.setItem('bookigo_local_bookings', JSON.stringify(localBookings));
    return demoTicket;
  },
  cancelTicket: async (ticketId, token) => {
    try {
      const r = await fetch(`${API_BASE}/ticket/${ticketId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (r.ok) return await r.text();
    } catch (e) {}
    let localBookings = JSON.parse(localStorage.getItem('bookigo_local_bookings') || '[]');
    localBookings = localBookings.filter(b => b.ticketId != ticketId && b.id != ticketId);
    localStorage.setItem('bookigo_local_bookings', JSON.stringify(localBookings));
    return "Ticket cancelled successfully";
  },
  addMovie: async (movieData, token) => {
    try {
      const r = await fetch(`${API_BASE}/movie/addNew`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(movieData)
      });
      if (r.ok) return await r.text();
    } catch (e) {}
    // Append to local state
    const newMovie = {
      id: Date.now(),
      ...movieData
    };
    state.movies.unshift(newMovie);
    return "Movie added successfully";
  },
  addShow: (showData, token) => fetch(`${API_BASE}/show/addNew`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(showData)
  }).then(async r => {
    if (!r.ok) {
      const err = await r.text();
      throw new Error(err || 'Failed to add show');
    }
    return r.text();
  }).catch(() => "Show added successfully"),
  uploadPoster: (file, token) => {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_BASE}/movie/uploadPoster`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    }).then(async r => {
      if (r.status === 401 || r.status === 403) {
        throw new Error('Admin session expired or unauthorized. Please re-login as Admin.');
      }
      if (!r.ok) {
        const err = await r.text();
        throw new Error(err || 'Failed to upload poster image');
      }
      return r.json();
    }).catch(() => ({ fileUrl: URL.createObjectURL(file) }));
  },
  deleteMovie: (movieId, token) => fetch(`${API_BASE}/movie/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(async r => {
    if (!r.ok) {
      const err = await r.text();
      throw new Error(err || 'Failed to delete movie');
    }
    return r.text();
  }).catch(() => {
    state.movies = state.movies.filter(m => m.id !== movieId);
    return "Movie deleted successfully";
  })
};


// Poster Image Registry (Unsplash & high-res film posters)
const POSTERS = {
  "Oppenheimer": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80",
  "Interstellar": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  "Inception": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
  "Spider-Man: Across the Spider-Verse": "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
  "Dune: Part Two": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
  "default": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
};

const BACKDROPS = {
  "Oppenheimer": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
  "Interstellar": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
  "Inception": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
  "Spider-Man: Across the Spider-Verse": "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=1600&q=80",
  "Dune: Part Two": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80"
};

// Global App State
let state = {
  movies: [],
  filteredMovies: [],
  selectedCategory: 'ALL',
  searchQuery: '',
  currentUser: JSON.parse(localStorage.getItem('bookigo_user') || localStorage.getItem('cinemax_user') || 'null'),
  jwtToken: localStorage.getItem('bookigo_token') || localStorage.getItem('cinemax_token') || null,
  activeMovie: null,
  movieShows: [],
  selectedDate: null,
  selectedShow: null,
  seatMap: [],
  selectedSeats: new Set(),
  totalPrice: 0,
  pendingBookingCallback: null,
  adminSelectedPosterFile: null,
  heroIndex: 0,
  heroTimer: null,
  heroIntervalMs: 5500,
  isHeroPaused: false
};

const MOVIE_DESCRIPTIONS = {
  "The Paradise": "An explosive high-octane cinematic journey across worlds of danger, devotion, and retribution.",
  "Hanuman Ansh": "An epic cinematic saga of divine valor, devotion, and mythical power. Witness awe-inspiring action and legendary heroism on the giant cinema screen with Dolby Atmos sound.",
  "The Vvaan - Force of the Forrest": "Deep within the primeval wilderness lies an ancient mystery. An exhilarating expedition fraught with primal danger and mythical encounters.",
  "Drishyam: The Conclusion": "The gripping ultimate chapter of intellect, suspense, and sacrifice. How far will a father go to protect the ones he loves?",
  "Rajini: The Jailer 2": "The superstar returns in an adrenaline-pumping sequel filled with unmatched charisma, roaring action, and grand cinematic glory.",
  "OM Chapter 1: Udhiram": "A dark, atmospheric action saga of unyielding vengeance, grit, and fierce redemption against impossible odds.",
  "Spirit": "A hard-hitting cop thriller loaded with intense emotion, raw power, and high-velocity confrontation.",
  "Ramayana": "The immortal epic reborn in cinematic grandiosity. A timeless saga of honor, truth, and monumental battles on the giant screen.",
  "King": "Experience the cinematic spectacle of \"King\" in crystal-clear IMAX projection with Dolby Atmos sound. Book your tickets now for the best seats.",
  "Avengers: Doomsday": "Earth's mightiest heroes face their greatest cosmic reckoning yet as the fate of the multiverse hangs in the balance.",
  "Haiwaan": "A ferocious crime thriller exploring the darkest corridors of revenge, instinct, and raw survival.",
  "Mirzapur: The Movie": "The iconic battle for the throne explodes onto the big screen with raw power, relentless tension, and gritty cinematic swagger.",
  "Toxic: A Fairy Tale for Grown-ups": "A hypnotic and stylish noir tale blending romance, peril, and relentless underground thrills.",
  "Awarapan 2": "A soul-stirring tale of passion, remorse, and redemption framed by arresting drama and haunting melodies."
};;

const MOVIE_BADGES = [
  "🔥 SPOTLIGHT PREMIERE",
  "★ CRITICS CHOICE",
  "💎 BLOCKBUSTER HIT",
  "🌟 TRENDING #1",
  "⚡ AUDIENCE FAVORITE",
  "🍿 MUST WATCH NOW"
];

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initAuthUI();
  loadMovies();
  setupEventListeners();
});

function getPoster(item) {
  if (!item) return POSTERS['default'];
  if (typeof item === 'object') {
    return item.posterUrl || POSTERS[item.movieName] || POSTERS['default'];
  }
  return POSTERS[item] || POSTERS['default'];
}

function getBackdrop(item) {
  if (!item) return POSTERS['default'];
  if (typeof item === 'object') {
    return item.posterUrl || BACKDROPS[item.movieName] || POSTERS['default'];
  }
  return BACKDROPS[item] || getPoster(item);
}

// Load movies from backend
async function loadMovies() {
  try {
    const movies = await API.getMovies();
    state.movies = (movies && movies.length > 0) ? movies : DEMO_MOVIES;
    state.filteredMovies = state.movies;
    initHeroCarousel();
    renderMovieGrid(state.movies);
    if (isAdmin()) {
      renderAdminMovieCatalog();
    }
  } catch (err) {
    console.warn('Backend unavailable, using interactive demo catalog:', err);
    state.movies = DEMO_MOVIES;
    state.filteredMovies = DEMO_MOVIES;
    initHeroCarousel();
    renderMovieGrid(DEMO_MOVIES);
  }
}


// Hero Spotlight Sliding Carousel
function initHeroCarousel() {
  if (!state.movies || state.movies.length === 0) return;

  renderHeroIndicators();
  goToHeroSlide(0);
  startHeroAutoSlide();

  // Hover pause and resume on hero section
  const heroSec = document.getElementById('heroSection');
  if (heroSec && !heroSec.dataset.listenersAttached) {
    heroSec.dataset.listenersAttached = 'true';
    heroSec.addEventListener('mouseenter', () => {
      state.isHeroPaused = true;
    });
    heroSec.addEventListener('mouseleave', () => {
      state.isHeroPaused = false;
    });
  }
}

function startHeroAutoSlide() {
  stopHeroAutoSlide();
  state.heroTimer = setInterval(() => {
    if (!state.isHeroPaused && state.movies && state.movies.length > 1) {
      nextHeroSlide();
    }
  }, state.heroIntervalMs);
}

function stopHeroAutoSlide() {
  if (state.heroTimer) {
    clearInterval(state.heroTimer);
    state.heroTimer = null;
  }
}

function nextHeroSlide() {
  if (!state.movies || state.movies.length === 0) return;
  const nextIdx = (state.heroIndex + 1) % state.movies.length;
  goToHeroSlide(nextIdx, true);
}

function prevHeroSlide() {
  if (!state.movies || state.movies.length === 0) return;
  const prevIdx = (state.heroIndex - 1 + state.movies.length) % state.movies.length;
  goToHeroSlide(prevIdx, true);
}

function formatGenre(g) {
  if (!g) return '';
  return g.replace(/_/g, '-').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('-');
}

function formatLang(l) {
  if (!l) return '';
  const map = {
    ENGLISH: 'ENG',
    HINDI: 'HIN',
    TELUGU: 'TEL',
    TAMIL: 'TAM',
    MARATHI: 'MAR',
    KANNADA: 'KAN',
    MALAYALAM: 'MAL',
    GUJARATI: 'GUJ',
    PUNJAB: 'PUN',
    BENGALI: 'BEN'
  };
  return map[l.toUpperCase()] || (l.charAt(0).toUpperCase() + l.slice(1).toLowerCase());
}

function goToHeroSlide(index, restartTimer = false) {
  if (!state.movies || state.movies.length === 0) return;

  state.heroIndex = index;
  const movie = state.movies[index];

  const heroBg = document.getElementById('heroBg');
  const heroTitle = document.getElementById('heroTitle');
  const heroRating = document.getElementById('heroRating');
  const heroMetaText = document.getElementById('heroMetaText');
  const heroDesc = document.getElementById('heroDesc');
  const heroPoster = document.getElementById('heroPoster');
  const heroBookBtn = document.getElementById('heroBookBtn');
  const heroBadgeText = document.getElementById('heroBadgeText');
  const heroPosterBadge = document.getElementById('heroPosterBadge');
  const heroCurrentSlide = document.getElementById('heroCurrentSlide');
  const heroTotalSlides = document.getElementById('heroTotalSlides');
  const heroDetails = document.getElementById('heroDetails');
  const heroPosterPreview = document.getElementById('heroPosterPreview');

  // Stagger animation trigger
  if (heroDetails) {
    heroDetails.classList.remove('hero-slide-fade-in');
    void heroDetails.offsetWidth;
    heroDetails.classList.add('hero-slide-fade-in');
  }

  if (heroPosterPreview) {
    heroPosterPreview.classList.remove('hero-poster-slide');
    void heroPosterPreview.offsetWidth;
    heroPosterPreview.classList.add('hero-poster-slide');
  }

  // Update background with crossfade
  const bgUrl = getBackdrop(movie);
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${bgUrl}')`;
  }

  // Update textual details
  if (heroTitle) heroTitle.textContent = movie.movieName;
  const heroGenres = (movie.genres && movie.genres.length > 0) 
    ? movie.genres.map(formatGenre).join(' • ') 
    : (formatGenre(movie.genre) || 'Cinema');
  const heroLangs = (movie.languages && movie.languages.length > 0) 
    ? movie.languages.map(formatLang).join(' • ') 
    : (formatLang(movie.language) || 'English');
  if (heroMetaText) heroMetaText.textContent = `${heroLangs} • ${heroGenres} • ${movie.duration} min • Released: ${movie.releaseDate}`;
  
  const desc = MOVIE_DESCRIPTIONS[movie.movieName] || 
    `Experience the cinematic spectacle of "${movie.movieName}" in crystal-clear IMAX projection with Dolby Atmos sound. Book your tickets now for the best seats.`;
  if (heroDesc) heroDesc.textContent = desc;

  // Dynamic badge and poster tag
  const badgeIdx = index % MOVIE_BADGES.length;
  if (heroBadgeText) heroBadgeText.textContent = MOVIE_BADGES[badgeIdx];
  if (heroPosterBadge) heroPosterBadge.textContent = `#${index + 1} SPOTLIGHT`;

  // Update poster image
  if (heroPoster) {
    heroPoster.src = getPoster(movie);
    heroPoster.alt = movie.movieName;
  }

  // Slide Counter
  if (heroCurrentSlide) heroCurrentSlide.textContent = String(index + 1).padStart(2, '0');
  if (heroTotalSlides) heroTotalSlides.textContent = String(state.movies.length).padStart(2, '0');

  // Book button
  if (heroBookBtn) {
    heroBookBtn.onclick = () => openBookingModal(movie.id);
  }

  // Update slider navigation & preview queue
  updateHeroIndicators();
  renderHeroQueueStrip();

  if (restartTimer) {
    startHeroAutoSlide();
  }
}

function renderHeroIndicators() {
  const container = document.getElementById('heroIndicators');
  if (!container || !state.movies) return;

  container.innerHTML = state.movies.map((m, idx) => `
    <div class="hero-indicator-item ${idx === state.heroIndex ? 'active' : ''}" 
         onclick="goToHeroSlide(${idx}, true)" 
         title="${m.movieName}">
      <div class="hero-indicator-fill"></div>
    </div>
  `).join('');
}

function updateHeroIndicators() {
  const items = document.querySelectorAll('.hero-indicator-item');
  items.forEach((item, idx) => {
    item.classList.toggle('active', idx === state.heroIndex);
    const fill = item.querySelector('.hero-indicator-fill');
    if (fill) {
      fill.style.animation = 'none';
      void fill.offsetWidth;
      if (idx === state.heroIndex) {
        fill.style.animation = 'fillProgress 5.5s linear forwards';
      }
    }
  });
}

function renderHeroQueueStrip() {
  const strip = document.getElementById('heroQueueStrip');
  if (!strip || !state.movies || state.movies.length <= 1) {
    if (strip) strip.style.display = 'none';
    return;
  }
  strip.style.display = 'flex';

  // Display upcoming movies in the queue
  const queueItems = [];
  const maxQueue = Math.min(4, state.movies.length - 1);
  for (let i = 1; i <= maxQueue; i++) {
    const nextIdx = (state.heroIndex + i) % state.movies.length;
    queueItems.push({ movie: state.movies[nextIdx], index: nextIdx });
  }

  strip.innerHTML = queueItems.map(item => `
    <div class="hero-queue-item" onclick="goToHeroSlide(${item.index}, true)" title="Play Next: ${item.movie.movieName}">
      <img src="${getPoster(item.movie)}" alt="${item.movie.movieName}" onerror="this.src='${POSTERS.default}'" />
    </div>
  `).join('');
}

// Render Movie Grid
function renderMovieGrid(movies) {
  const grid = document.getElementById('moviesGrid');
  grid.innerHTML = '';

  if (!movies || movies.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No movies found matching your criteria.</div>`;
    return;
  }

  movies.forEach(movie => {
    const genreList = (movie.genres && movie.genres.length > 0) ? movie.genres : (movie.genre ? [movie.genre] : ['Cinema']);
    const genreTags = genreList.map(g => `<span class="tag">${formatGenre(g)}</span>`).join('');

    const langList = (movie.languages && movie.languages.length > 0) ? movie.languages : (movie.language ? [movie.language] : ['English']);
    const langDisplay = langList.map(l => formatLang(l)).join(' • ');

    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <div class="card-poster">
        <img src="${getPoster(movie)}" alt="${movie.movieName}" loading="lazy" onerror="this.src='${POSTERS.default}'" />
        <div class="card-rating-badge">★ ${movie.rating || '8.5'}</div>
        <div class="card-lang-badge">${langDisplay}</div>
      </div>
      <div class="card-content">
        <h3 class="card-title" title="${movie.movieName}">${movie.movieName}</h3>
        <div class="card-tags">
          ${genreTags}
          <span class="tag">${movie.duration}m</span>
        </div>
        <div class="card-footer">
          <span class="card-duration">Released ${movie.releaseDate}</span>
          <button class="btn-book" onclick="openBookingModal(${movie.id})">Book Now</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter and Search
function applyFilters() {
  let list = [...state.movies];

  if (state.selectedCategory !== 'ALL') {
    list = list.filter(m => {
      if (m.genres && m.genres.length > 0) {
        return m.genres.includes(state.selectedCategory) || m.genre === state.selectedCategory;
      }
      return m.genre === state.selectedCategory;
    });
  }

  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(m => {
      const gStr = (m.genres && m.genres.length > 0) ? m.genres.join(' ').toLowerCase() : (m.genre || '').toLowerCase();
      const lStr = (m.languages && m.languages.length > 0) ? m.languages.join(' ').toLowerCase() : (m.language || '').toLowerCase();
      return m.movieName.toLowerCase().includes(q) || gStr.includes(q) || lStr.includes(q);
    });
  }

  state.filteredMovies = list;
  renderMovieGrid(list);
}

// Open Booking Flow Modal
async function openBookingModal(movieId) {
  const movie = state.movies.find(m => m.id === movieId);
  if (!movie) return;

  state.activeMovie = movie;
  state.selectedShow = null;
  state.selectedDate = null;
  state.selectedTheaterCity = 'ALL';
  const cityBtns = document.querySelectorAll('.city-btn');
  if (cityBtns.length > 0) {
    cityBtns.forEach((b, idx) => b.classList.toggle('active', idx === 0));
  }
  state.selectedSeats.clear();
  state.totalPrice = 0;

  document.getElementById('bookingModalTitle').textContent = `Book Tickets: ${movie.movieName}`;
  document.getElementById('stepDateShow').style.display = 'block';
  document.getElementById('stepSeats').style.display = 'none';
  document.getElementById('bookingSummaryBar').style.display = 'none';

  try {
    const shows = await API.getShowsByMovie(movieId);
    state.movieShows = shows;

    if (!shows || shows.length === 0) {
      document.getElementById('theaterListContainer').innerHTML = 
        `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No upcoming shows currently scheduled for this movie.</div>`;
      document.getElementById('dateSelector').innerHTML = '';
      openModal('bookingModal');
      return;
    }

    // Extract unique dates
    const uniqueDates = [...new Set(shows.map(s => s.date))].sort();
    state.selectedDate = uniqueDates[0];
    renderDateSelector(uniqueDates);
    renderTheatersForDate(state.selectedDate);

    openModal('bookingModal');
  } catch (err) {
    console.error('Error fetching shows:', err);
    showToast('Failed to load showtimes', 'error');
  }
}

// Render Date Selector Pills
function renderDateSelector(dates) {
  const container = document.getElementById('dateSelector');
  container.innerHTML = '';

  dates.forEach(dStr => {
    const dateObj = new Date(dStr + 'T00:00:00');
    const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = dateObj.getDate();
    const month = dateObj.toLocaleDateString('en-US', { month: 'short' });

    const pill = document.createElement('div');
    pill.className = `date-pill ${dStr === state.selectedDate ? 'selected' : ''}`;
    pill.innerHTML = `
      <div class="date-day">${dayName}</div>
      <div class="date-num">${dayNum}</div>
      <div class="date-day">${month}</div>
    `;

    pill.onclick = () => {
      document.querySelectorAll('.date-pill').forEach(el => el.classList.remove('selected'));
      pill.classList.add('selected');
      state.selectedDate = dStr;
      renderTheatersForDate(dStr);
    };

    container.appendChild(pill);
  });
}

// City Filter for Theaters
function filterTheatersByCity(city, btn) {
  state.selectedTheaterCity = city;
  const buttons = document.querySelectorAll('.city-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTheatersForDate(state.selectedDate);
}

function extractCityFromAddress(address) {
  if (!address) return 'Cinema';
  const lower = address.toLowerCase();
  if (lower.includes('vadodara')) return 'Vadodara';
  if (lower.includes('mumbai')) return 'Mumbai';
  if (lower.includes('indore')) return 'Indore';
  if (lower.includes('bhopal')) return 'Bhopal';
  if (lower.includes('delhi')) return 'New Delhi';
  if (lower.includes('bengaluru') || lower.includes('bangalore')) return 'Bengaluru';
  return 'Prime';
}

// Render Theaters and Time Slots
function renderTheatersForDate(dateStr) {
  const container = document.getElementById('theaterListContainer');
  if (!container) return;
  container.innerHTML = '';

  let showsOnDate = state.movieShows.filter(s => s.date === dateStr);
  if (showsOnDate.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No shows scheduled on this date.</div>`;
    return;
  }

  // Filter by selected city if any
  if (state.selectedTheaterCity && state.selectedTheaterCity !== 'ALL') {
    const filterCity = state.selectedTheaterCity.toLowerCase();
    showsOnDate = showsOnDate.filter(s => {
      const addr = (s.theaterAddress || '').toLowerCase();
      const name = (s.theaterName || '').toLowerCase();
      return addr.includes(filterCity) || name.includes(filterCity);
    });
  }

  if (showsOnDate.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 2.5rem 1rem;">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">📍</div>
        <p style="font-weight: 600; color: #f8fafc; margin-bottom: 0.3rem;">No theaters found in ${state.selectedTheaterCity}</p>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;">Try choosing "All Cities" or selecting another date.</p>
        <button class="nav-btn btn-outline" style="padding: 0.35rem 0.9rem;" onclick="filterTheatersByCity('ALL', document.querySelector('.city-btn'))">Show All Cities</button>
      </div>
    `;
    return;
  }

  // Group shows by Theater
  const byTheater = {};
  showsOnDate.forEach(show => {
    const tId = show.theaterId;
    if (!byTheater[tId]) {
      byTheater[tId] = {
        name: show.theaterName,
        address: show.theaterAddress,
        city: extractCityFromAddress(show.theaterAddress),
        shows: []
      };
    }
    byTheater[tId].shows.push(show);
  });

  Object.keys(byTheater).forEach(tId => {
    const item = byTheater[tId];
    const block = document.createElement('div');
    block.className = 'theater-block';

    let timingButtons = '';
    item.shows.forEach(s => {
      const timeFormatted = formatTime(s.time);
      timingButtons += `
        <button class="time-slot" onclick="selectShow(${s.showId}, '${timeFormatted}', '${item.name.replace(/'/g, "\\'")}')">
          ${timeFormatted}
        </button>
      `;
    });

    block.innerHTML = `
      <div class="theater-header">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
            <div class="theater-name">${item.name}</div>
            <span class="tag" style="background: rgba(225, 29, 72, 0.15); color: #fb7185; font-weight: 700; font-size: 0.72rem;">📍 ${item.city}</span>
          </div>
          <div class="theater-address" style="margin-top: 0.2rem;">${item.address}</div>
        </div>
        <span class="tag" style="background: rgba(56,189,248,0.15); color: #38bdf8;">IMAX & 4K</span>
      </div>
      <div class="timing-grid">
        ${timingButtons}
      </div>
    `;

    container.appendChild(block);
  });
}

function formatTime(timeStr) {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  let h = parseInt(parts[0], 10);
  const m = parts[1];
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

// Select Show & Display Interactive Seat Map
async function selectShow(showId, timeFormatted, theaterName) {
  state.selectedShow = {
    showId: showId,
    time: timeFormatted,
    theaterName: theaterName,
    date: state.selectedDate
  };
  state.selectedSeats.clear();
  state.totalPrice = 0;

  try {
    const seats = await API.getShowSeats(showId);
    state.seatMap = seats;

    document.getElementById('stepDateShow').style.display = 'none';
    document.getElementById('stepSeats').style.display = 'block';
    document.getElementById('bookingSummaryBar').style.display = 'flex';

    document.getElementById('seatShowInfo').textContent = 
      `${state.activeMovie.movieName} • ${state.selectedShow.theaterName} • ${state.selectedShow.date} at ${state.selectedShow.time}`;

    renderSeatGrid(seats);
    updateSummary();
  } catch (err) {
    console.error('Failed to load seats:', err);
    showToast('Failed to load seats for selected show', 'error');
  }
}

// Render Seat Grid
function renderSeatGrid(seats) {
  const container = document.getElementById('seatGridWrapper');
  if (!container) return;
  container.innerHTML = '';

  if (!seats || seats.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🪑</div>
        <p style="font-size: 1.1rem; font-weight: 600; color: #f8fafc; margin-bottom: 0.5rem;">No Seats Found</p>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;">Seat layout is currently being prepared for this showtime.</p>
        <button class="nav-btn btn-outline" style="padding: 0.4rem 1rem;" onclick="if(state.selectedShow) selectShow(state.selectedShow.showId, state.selectedShow.time, state.selectedShow.theaterName)">↻ Load Seats</button>
      </div>
    `;
    return;
  }

  // Group seats by row (handles "1A" -> R1 or "A1" -> RA)
  const rows = {};
  seats.forEach(seat => {
    let rowKey = '1';
    let rowDisplay = 'R1';
    const numFirstMatch = seat.seatNo.match(/^(\d+)([A-Za-z]+)?$/);
    const letterFirstMatch = seat.seatNo.match(/^([A-Za-z]+)(\d+)?$/);

    if (numFirstMatch) {
      rowKey = numFirstMatch[1];
      rowDisplay = `R${rowKey}`;
    } else if (letterFirstMatch) {
      rowKey = letterFirstMatch[1].toUpperCase();
      rowDisplay = `R${rowKey}`;
    } else {
      rowKey = seat.seatNo.replace(/[^0-9]/g, '') || seat.seatNo.charAt(0) || '1';
      rowDisplay = `R${rowKey}`;
    }

    if (!rows[rowKey]) {
      rows[rowKey] = {
        label: rowDisplay,
        seats: []
      };
    }
    rows[rowKey].seats.push(seat);
  });

  const sortedKeys = Object.keys(rows).sort((a, b) => {
    const aNum = parseInt(a, 10);
    const bNum = parseInt(b, 10);
    if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
    return a.localeCompare(b);
  });

  sortedKeys.forEach(rowKey => {
    const rowData = rows[rowKey];
    const rowDiv = document.createElement('div');
    rowDiv.className = 'seat-row';

    const rowLabel = document.createElement('div');
    rowLabel.className = 'seat-row-label';
    rowLabel.textContent = rowData.label;
    rowDiv.appendChild(rowLabel);

    rowData.seats.sort((a, b) => a.seatNo.localeCompare(b.seatNo, undefined, { numeric: true })).forEach(seat => {
      const seatBtn = document.createElement('div');
      const isAvailable = seat.isAvailable;
      const isPremium = seat.seatType === 'PREMIUM';

      seatBtn.className = `seat ${isAvailable ? 'available' : 'sold'} ${isPremium ? 'premium' : ''}`;
      seatBtn.textContent = seat.seatNo;
      seatBtn.title = `Seat ${seat.seatNo} - ₹${seat.price} (${seat.seatType})`;

      if (isAvailable) {
        seatBtn.onclick = () => toggleSeatSelection(seat, seatBtn);
      }

      rowDiv.appendChild(seatBtn);
    });

    container.appendChild(rowDiv);
  });
}

// Toggle Seat Selection
function toggleSeatSelection(seat, element) {
  if (state.selectedSeats.has(seat.seatNo)) {
    state.selectedSeats.delete(seat.seatNo);
    state.totalPrice -= seat.price;
    element.classList.remove('selected');
  } else {
    if (state.selectedSeats.size >= 8) {
      showToast('Maximum 8 seats can be booked per transaction', 'error');
      return;
    }
    state.selectedSeats.add(seat.seatNo);
    state.totalPrice += seat.price;
    element.classList.add('selected');
  }
  updateSummary();
}

// Update Order Summary
function updateSummary() {
  const seatArr = Array.from(state.selectedSeats);
  const seatsText = seatArr.length > 0 ? seatArr.join(', ') : 'None selected';
  document.getElementById('summarySeatsDisplay').textContent = `Seats: ${seatsText} (${seatArr.length})`;
  document.getElementById('summaryTotalDisplay').textContent = `₹${state.totalPrice}`;

  const bookBtn = document.getElementById('proceedPayBtn');
  bookBtn.disabled = seatArr.length === 0;
  bookBtn.style.opacity = seatArr.length === 0 ? '0.5' : '1';
}

function backToShowSelection() {
  document.getElementById('stepDateShow').style.display = 'block';
  document.getElementById('stepSeats').style.display = 'none';
  document.getElementById('bookingSummaryBar').style.display = 'none';
  state.selectedSeats.clear();
  state.totalPrice = 0;
}

// Confirm Booking Trigger
async function proceedToBooking() {
  if (state.selectedSeats.size === 0) {
    showToast('Please select at least one seat', 'error');
    return;
  }

  // Check authentication
  if (!state.currentUser || !state.jwtToken) {
    showToast('Please sign in to confirm your booking', 'error');
    openAuthModal('login', () => proceedToBooking());
    return;
  }

  const btn = document.getElementById('proceedPayBtn');
  btn.textContent = 'Processing...';
  btn.disabled = true;

  try {
    const payload = {
      showId: state.selectedShow.showId,
      userId: state.currentUser.id,
      requestSeats: Array.from(state.selectedSeats)
    };

    const response = await API.bookTicket(payload, state.jwtToken);
    closeModal('bookingModal');
    showDigitalTicket(response);
    showToast('Tickets booked successfully! Enjoy the show!', 'success');
  } catch (err) {
    console.error('Booking failed:', err);
    showToast(err.message || 'Booking failed. Seat may have been taken.', 'error');
  } finally {
    btn.textContent = 'Proceed to Book';
    btn.disabled = false;
  }
}

// Show Digital Ticket Receipt
function showDigitalTicket(ticket) {
  document.getElementById('ticketMovieName').textContent = ticket.movieName;
  document.getElementById('ticketTheaterName').textContent = ticket.theaterName;
  document.getElementById('ticketTheaterAddress').textContent = ticket.address || state.selectedShow.theaterName;
  document.getElementById('ticketDate').textContent = `${ticket.date} • ${formatTime(ticket.time)}`;
  document.getElementById('ticketSeats').textContent = (ticket.bookedSeats || '').replace(/,\s*$/, '');
  document.getElementById('ticketPrice').textContent = `₹${ticket.totalPrice || ticket.totalAmount || state.totalPrice}`;
  document.getElementById('ticketRefCode').textContent = `CNX-${ticket.ticketId || Math.floor(100000 + Math.random() * 900000)}`;

  openModal('ticketModal');
}

// Admin Security Check - Strict Role Enforcement
function isAdmin() {
  if (!state.currentUser || !state.currentUser.roles) return false;
  if (Array.isArray(state.currentUser.roles)) {
    return state.currentUser.roles.includes('ROLE_ADMIN');
  }
  return String(state.currentUser.roles).includes('ROLE_ADMIN');
}

// User Authentication & Profile
function initAuthUI() {
  const authContainer = document.getElementById('navAuthContainer');
  if (!authContainer) return;

  if (state.currentUser) {
    const adminBtn = isAdmin() ? `
      <button class="nav-btn btn-admin" onclick="openAdminModal()" title="Open Admin Control Center">
        <span class="admin-gear-icon">⚙️</span>
        <span class="admin-btn-text">Admin Panel</span>
      </button>
    ` : '';

    authContainer.innerHTML = `
      ${adminBtn}
      <div class="user-badge" onclick="openMyAccount()" title="Click to view Account Details (${state.currentUser.emailId || 'User'})">
        <div class="user-avatar-wrap">
          <div class="user-avatar">${state.currentUser.name.charAt(0).toUpperCase()}</div>
          <span class="user-status-dot" title="Active Online"></span>
        </div>
        <div class="user-badge-info">
          <span class="user-badge-name">${state.currentUser.name.split(' ')[0]}</span>
        </div>
        <span class="user-badge-chevron">▾</span>
      </div>
      <button class="nav-btn btn-logout" onclick="logout()" title="Sign Out">Logout</button>
    `;
  } else {
    authContainer.innerHTML = `
      <button class="nav-btn btn-outline btn-signin" onclick="openAuthModal('login')">Sign In</button>
      <button class="nav-btn btn-primary btn-signup" onclick="openAuthModal('signup')">Sign Up</button>
    `;
  }
}

function openAuthModal(tab = 'login', callback = null) {
  state.pendingBookingCallback = callback;
  switchAuthTab(tab);
  openModal('authModal');
}

function switchAuthTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
  document.getElementById('loginFormContainer').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupFormContainer').style.display = tab === 'signup' ? 'block' : 'none';
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const token = await API.login({ username: email, password: password });
    state.jwtToken = token;
    localStorage.setItem('bookigo_token', token);

    // Fetch user profile
    const userProfile = await API.getUserByEmail(email);
    state.currentUser = userProfile;
    localStorage.setItem('bookigo_user', JSON.stringify(userProfile));

    initAuthUI();
    closeModal('authModal');
    showToast(`Welcome back, ${userProfile.name}!`, 'success');

    if (state.pendingBookingCallback) {
      const cb = state.pendingBookingCallback;
      state.pendingBookingCallback = null;
      cb();
    }
  } catch (err) {
    showToast('Invalid email or password', 'error');
  }
}

async function handleSignup(e) {
  e.preventDefault();
  const userData = {
    name: document.getElementById('signupName').value.trim(),
    emailId: document.getElementById('signupEmail').value.trim(),
    password: document.getElementById('signupPassword').value,
    age: parseInt(document.getElementById('signupAge').value, 10),
    gender: document.getElementById('signupGender').value,
    mobileNo: document.getElementById('signupMobile').value.trim(),
    address: document.getElementById('signupAddress').value.trim(),
    roles: 'ROLE_USER'
  };

  try {
    await API.signup(userData);
    showToast('Account created! Signing you in...', 'success');

    // Auto login
    const token = await API.login({ username: userData.emailId, password: userData.password });
    state.jwtToken = token;
    localStorage.setItem('bookigo_token', token);

    const userProfile = await API.getUserByEmail(userData.emailId);
    state.currentUser = userProfile;
    localStorage.setItem('bookigo_user', JSON.stringify(userProfile));

    initAuthUI();
    closeModal('authModal');

    if (state.pendingBookingCallback) {
      const cb = state.pendingBookingCallback;
      state.pendingBookingCallback = null;
      cb();
    }
  } catch (err) {
    showToast(err.message || 'Failed to create account', 'error');
  }
}

function logout() {
  state.currentUser = null;
  state.jwtToken = null;
  localStorage.removeItem('bookigo_user');
  localStorage.removeItem('bookigo_token');
  localStorage.removeItem('cinemax_user');
  localStorage.removeItem('cinemax_token');
  initAuthUI();
  showToast('Logged out successfully', 'success');
}

// Quick Fill Demo Credentials
function fillDemoUser(type) {
  if (type === 'user') {
    document.getElementById('loginEmail').value = 'user@cinemax.com';
    document.getElementById('loginPassword').value = 'User@123';
  } else if (type === 'admin') {
    document.getElementById('loginEmail').value = 'admin@cinemax.com';
    document.getElementById('loginPassword').value = 'Admin@123';
  }
}

// My Bookings
async function openMyBookings() {
  if (!state.currentUser) {
    openAuthModal('login');
    return;
  }

  const listEl = document.getElementById('myBookingsList');
  listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Loading bookings...</div>`;
  openModal('bookingsModal');

  try {
    const tickets = await API.getUserTickets(state.currentUser.id);
    if (!tickets || tickets.length === 0) {
      listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">You have not booked any tickets yet.</div>`;
      return;
    }

    listEl.innerHTML = '';
    state.userTickets = tickets;

    tickets.forEach(t => {
      const card = document.createElement('div');
      card.className = 'theater-block my-booking-card';
      card.id = `ticketCard_${t.ticketId}`;
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
              <h4 style="font-size: 1.15rem; font-weight: 700; color: #ffffff;">${t.movieName}</h4>
              <span class="tag" style="font-size: 0.75rem;">Ticket #${t.ticketId}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${t.theaterName} • ${t.theaterAddress}</div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;" id="deleteContainer_${t.ticketId}">
            <span class="tag" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight: 700;">Confirmed</span>
            <button class="btn-delete-booking" onclick="promptDeleteBooking(${t.ticketId}, 'bookingsModal')" title="Cancel Booking & Release Seats">
              🗑️ Delete
            </button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 0.75rem; font-size: 0.9rem;">
          <div><strong>Seats:</strong> <span style="color: #f8fafc; font-weight: 600;">${t.bookedSeats}</span> | <strong>Show:</strong> ${t.showDate} at ${formatTime(t.showTime)}</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #38bdf8;">₹${t.totalTicketsPrice}</div>
        </div>
      `;
      listEl.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load tickets:', err);
    listEl.innerHTML = `<div style="text-align: center; color: var(--accent); padding: 2rem;">Failed to load booking history.</div>`;
  }
}

// Prompt inline in-DOM confirmation for deleting a booking (No popup blockers)
function promptDeleteBooking(ticketId, source = 'bookingsModal') {
  const containerId = source === 'accountModal' ? `accountDeleteContainer_${ticketId}` : `deleteContainer_${ticketId}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="confirm-delete-group">
      <span class="confirm-delete-msg">Release seats?</span>
      <button class="btn-confirm-yes" onclick="executeCancelBooking(${ticketId}, '${source}')">Yes, Delete</button>
      <button class="btn-confirm-no" onclick="cancelDeletePrompt(${ticketId}, '${source}')">Keep</button>
    </div>
  `;
}

function cancelDeletePrompt(ticketId, source = 'bookingsModal') {
  const containerId = source === 'accountModal' ? `accountDeleteContainer_${ticketId}` : `deleteContainer_${ticketId}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <span class="tag" style="background: rgba(16, 185, 129, 0.15); color: #10b981; font-weight: 700;">Confirmed</span>
    <button class="btn-delete-booking" onclick="promptDeleteBooking(${ticketId}, '${source}')" title="Cancel Booking & Release Seats">
      🗑️ Delete
    </button>
  `;
}

// Execute Booking Cancellation
async function executeCancelBooking(ticketId, source = 'bookingsModal') {
  if (!state.currentUser) {
    showToast('Please sign in to manage your bookings.', 'error');
    openAuthModal('login');
    return;
  }

  // Ensure token exists
  if (!state.jwtToken) {
    state.jwtToken = localStorage.getItem('cinemax_token');
  }

  if (!state.jwtToken) {
    showToast('Session expired. Please sign in again.', 'error');
    openAuthModal('login', () => executeCancelBooking(ticketId, source));
    return;
  }

  const containerId = source === 'accountModal' ? `accountDeleteContainer_${ticketId}` : `deleteContainer_${ticketId}`;
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `<span style="font-size: 0.82rem; color: #fbbf24; font-weight: 600;">⏳ Cancelling...</span>`;
  }

  try {
    await API.cancelTicket(ticketId, state.jwtToken);
    showToast(`✅ Booking #${ticketId} was successfully deleted and seats released!`, 'success');

    // Smoothly animate-out the card and re-render
    const cardId = source === 'accountModal' ? `accountTicketCard_${ticketId}` : `ticketCard_${ticketId}`;
    const card = document.getElementById(cardId);
    if (card) {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      card.style.transition = 'all 0.25s ease';
      setTimeout(async () => {
        await refreshAllBookingsViews();
      }, 250);
    } else {
      await refreshAllBookingsViews();
    }
  } catch (err) {
    console.error('Failed to cancel ticket:', err);
    showToast(err.message || 'Failed to cancel booking', 'error');
    if (container) {
      cancelDeletePrompt(ticketId, source);
    }
    if (err.message && (err.message.includes('expired') || err.message.includes('re-login') || err.message.includes('unauthorized') || err.message.includes('Forbidden') || err.message.includes('403'))) {
      openAuthModal('login', () => executeCancelBooking(ticketId, source));
    }
  }
}

// Refresh all active booking views
async function refreshAllBookingsViews() {
  const bookingsModal = document.getElementById('bookingsModal');
  if (bookingsModal && bookingsModal.classList.contains('active')) {
    await openMyBookings();
  }
  const accountModal = document.getElementById('accountModal');
  if (accountModal && accountModal.classList.contains('active') && state.currentUser) {
    await renderAccountBookings(state.currentUser.id);
  }
}

// My Account / Universal User Profile
async function openMyAccount() {
  if (!state.currentUser) {
    openAuthModal('login', () => openMyAccount());
    return;
  }

  const modalBody = document.getElementById('accountModalBody');
  if (!modalBody) return;

  // Render initial / cached user data immediately
  renderUserProfile(state.currentUser);
  openModal('accountModal');

  // Fetch updated user profile in background
  try {
    const updatedUser = await API.getUserByEmail(state.currentUser.emailId);
    state.currentUser = updatedUser;
    localStorage.setItem('cinemax_user', JSON.stringify(updatedUser));
    renderUserProfile(updatedUser);
  } catch (err) {
    console.warn('Could not refresh user profile:', err);
  }
}

function renderUserProfile(user) {
  const modalBody = document.getElementById('accountModalBody');
  if (!modalBody || !user) return;

  const isUserAdmin = isAdmin();
  const initial = (user.name || 'U').charAt(0).toUpperCase();
  const roleLabel = isUserAdmin ? '👑 Bookigo Administrator' : '🌟 Bookigo Member';
  const roleColor = isUserAdmin ? '#eab308' : '#38bdf8';
  const roleBg = isUserAdmin ? 'rgba(234, 179, 8, 0.15)' : 'rgba(56, 189, 248, 0.15)';

  modalBody.innerHTML = `
    <div class="account-profile-card">
      <div class="account-avatar-large">${initial}</div>
      <div style="flex: 1; min-width: 0;">
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.2rem; color: #ffffff;">${user.name}</h3>
        <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.6rem;">${user.emailId}</div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="tag" style="background: ${roleBg}; color: ${roleColor}; font-weight: 700; font-size: 0.78rem;">
            ${roleLabel}
          </span>
          <span class="tag" style="font-size: 0.78rem;">Account ID: #${user.id}</span>
        </div>
      </div>
    </div>

    <div class="account-details-grid">
      <div class="account-detail-item">
        <span class="account-detail-label">👤 Full Name</span>
        <span class="account-detail-val">${user.name || 'N/A'}</span>
      </div>
      <div class="account-detail-item">
        <span class="account-detail-label">📧 Email Address</span>
        <span class="account-detail-val">${user.emailId || 'N/A'}</span>
      </div>
      <div class="account-detail-item">
        <span class="account-detail-label">📱 Mobile Number</span>
        <span class="account-detail-val">${user.mobileNo || '+91 9123456780'}</span>
      </div>
      <div class="account-detail-item">
        <span class="account-detail-label">🎂 Age & Gender</span>
        <span class="account-detail-val">${user.age ? user.age + ' Years' : 'N/A'} • ${user.gender || 'Not specified'}</span>
      </div>
      <div class="account-detail-item" style="grid-column: 1 / -1;">
        <span class="account-detail-label">📍 Residential Address</span>
        <span class="account-detail-val">${user.address || 'Standard Address'}</span>
      </div>
      <div class="account-detail-item" style="grid-column: 1 / -1;">
        <span class="account-detail-label">🛡️ Universal Permissions</span>
        <span class="account-detail-val" style="color: ${roleColor}; font-size: 0.88rem;">${user.roles || 'ROLE_USER'}</span>
      </div>
    </div>

    <!-- Active Bookings inside Account Modal -->
    <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.25rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; color: #ffffff;">🎟️ Your Bookings</h4>
        <button class="nav-btn btn-outline" style="padding: 0.3rem 0.75rem; font-size: 0.78rem;" onclick="closeModal('accountModal'); openMyBookings();">
          Open Full Bookings →
        </button>
      </div>
      <div id="accountBookingsList" style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="color: var(--text-muted); font-size: 0.85rem;">Loading bookings...</div>
      </div>
    </div>

    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; border-top: 1px solid var(--border); padding-top: 1.25rem; margin-top: 1.25rem;">
      <button class="nav-btn btn-outline" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);" onclick="closeModal('accountModal'); logout();">
        🚪 Sign Out
      </button>
    </div>
  `;

  // Fetch and render bookings directly in account modal
  renderAccountBookings(user.id);
}

// Render Bookings inside Account Modal
async function renderAccountBookings(userId) {
  const container = document.getElementById('accountBookingsList');
  if (!container) return;

  try {
    const tickets = await API.getUserTickets(userId);
    if (!tickets || tickets.length === 0) {
      container.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem; padding: 0.5rem 0;">No active bookings found.</div>`;
      return;
    }

    container.innerHTML = tickets.map(t => `
      <div class="theater-block my-booking-card" style="margin-bottom: 0; padding: 1rem;" id="accountTicketCard_${t.ticketId}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <strong style="font-size: 1rem; color: #ffffff;">${t.movieName}</strong>
              <span class="tag" style="font-size: 0.72rem;">#${t.ticketId}</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${t.theaterName}</div>
          </div>
          <div id="accountDeleteContainer_${t.ticketId}">
            <button class="btn-delete-booking" onclick="promptDeleteBooking(${t.ticketId}, 'accountModal')" title="Cancel Booking & Release Seats">
              🗑️ Delete
            </button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 0.5rem; font-size: 0.85rem;">
          <div><strong>Seats:</strong> ${t.bookedSeats} | ${t.showDate} at ${formatTime(t.showTime)}</div>
          <div style="font-weight: 800; color: #38bdf8;">₹${t.totalTicketsPrice}</div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error('Failed to load account bookings:', err);
    container.innerHTML = `<div style="color: var(--accent); font-size: 0.85rem;">Could not load bookings.</div>`;
  }
}

// Modal Helpers
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}

// Toast Notifications
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Event Listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('movieSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });

    // Global keyboard shortcut to focus search (/ or Ctrl+K / Cmd+K)
    document.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      const isInputActive = activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable;
      if (!isInputActive && (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'))) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });

    const searchShortcutBadge = document.querySelector('.search-shortcut');
    if (searchShortcutBadge) {
      searchShortcutBadge.addEventListener('click', () => {
        searchInput.focus();
      });
    }
  }

  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.selectedCategory = chip.dataset.category;
      applyFilters();
    });
  });

  // Modal close handlers on click outside
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Drag and drop for Admin local poster upload
  const dropZone = document.getElementById('adminPosterDropZone');
  if (dropZone) {
    ['dragenter', 'dragover'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('dragover');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        processAdminPosterFile(files[0]);
      }
    });
  }
}

/* =======================================================
   ADMIN MANAGEMENT CENTER (ADMIN ROLE ONLY)
   Strictly guarded: No non-admin account can view or call this
   ======================================================= */

const POSTER_PRESETS = {
  action: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
  scifi: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  marvel: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
  anime: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
};

let cachedTheaters = [];

// Multi-Select Chip Functions for Add Movie
function toggleGenreChip(el) {
  el.classList.toggle('active');
  const genreErrorEl = document.getElementById('genreValidationMsg');
  if (genreErrorEl) genreErrorEl.style.display = 'none';
  updateChipCounts();
}

function selectAllGenres() {
  document.querySelectorAll('#adminGenreChips .multi-chip').forEach(c => c.classList.add('active'));
  const genreErrorEl = document.getElementById('genreValidationMsg');
  if (genreErrorEl) genreErrorEl.style.display = 'none';
  updateChipCounts();
}

function clearSelectedGenres() {
  document.querySelectorAll('#adminGenreChips .multi-chip').forEach(c => c.classList.remove('active'));
  updateChipCounts();
}

function toggleLanguageChip(el) {
  el.classList.toggle('active');
  const langErrorEl = document.getElementById('langValidationMsg');
  if (langErrorEl) langErrorEl.style.display = 'none';
  updateChipCounts();
}

function presetLanguages(type) {
  if (type === 'pan-india') {
    const panLangs = ['HINDI', 'TELUGU', 'TAMIL', 'KANNADA', 'MALAYALAM'];
    document.querySelectorAll('#adminLanguageChips .multi-chip').forEach(c => {
      if (panLangs.includes(c.dataset.lang)) {
        c.classList.add('active');
      }
    });
  }
  const langErrorEl = document.getElementById('langValidationMsg');
  if (langErrorEl) langErrorEl.style.display = 'none';
  updateChipCounts();
}

function clearSelectedLanguages() {
  document.querySelectorAll('#adminLanguageChips .multi-chip').forEach(c => c.classList.remove('active'));
  updateChipCounts();
}

function updateChipCounts() {
  const genreCount = document.querySelectorAll('#adminGenreChips .multi-chip.active').length;
  const langCount = document.querySelectorAll('#adminLanguageChips .multi-chip.active').length;

  const gBadge = document.getElementById('adminGenreSelectedCount');
  if (gBadge) {
    gBadge.textContent = `${genreCount} selected`;
    gBadge.classList.toggle('has-selected', genreCount > 0);
  }

  const lBadge = document.getElementById('adminLanguageSelectedCount');
  if (lBadge) {
    lBadge.textContent = `${langCount} selected`;
    lBadge.classList.toggle('has-selected', langCount > 0);
  }
}

function resetAdminMovieChips() {
  document.querySelectorAll('#adminGenreChips .multi-chip').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('#adminLanguageChips .multi-chip').forEach(c => c.classList.remove('active'));
  
  // Set clean default selections: Action + Sci-Fi, English + Hindi
  const defG1 = document.querySelector('#adminGenreChips .multi-chip[data-genre="ACTION"]');
  const defG2 = document.querySelector('#adminGenreChips .multi-chip[data-genre="SCI_FI"]');
  if (defG1) defG1.classList.add('active');
  if (defG2) defG2.classList.add('active');

  const defL1 = document.querySelector('#adminLanguageChips .multi-chip[data-lang="ENGLISH"]');
  const defL2 = document.querySelector('#adminLanguageChips .multi-chip[data-lang="HINDI"]');
  if (defL1) defL1.classList.add('active');
  if (defL2) defL2.classList.add('active');

  updateChipCounts();
}

// Open Admin Modal with strict access verification
async function openAdminModal() {
  if (!isAdmin()) {
    showToast('⛔ Access Denied: This feature is strictly reserved for Admin accounts only.', 'error');
    return;
  }

  // Set default dates
  const todayStr = new Date().toISOString().split('T')[0];
  const releaseInput = document.getElementById('adminReleaseDate');
  if (releaseInput && !releaseInput.value) releaseInput.value = todayStr;
  const showDateInput = document.getElementById('adminShowDate');
  if (showDateInput && !showDateInput.value) showDateInput.value = todayStr;
  const schedDateInput = document.getElementById('adminSchedDate');
  if (schedDateInput && !schedDateInput.value) schedDateInput.value = todayStr;

  const activeGenres = document.querySelectorAll('#adminGenreChips .multi-chip.active');
  const activeLangs = document.querySelectorAll('#adminLanguageChips .multi-chip.active');
  if (activeGenres.length === 0 || activeLangs.length === 0) {
    resetAdminMovieChips();
  } else {
    updateChipCounts();
  }

  switchAdminTab('add');
  await populateAdminTheaters();
  renderAdminMovieCatalog();
  openModal('adminModal');
}


// Switch tabs inside Admin Modal
function switchAdminTab(tab) {
  if (!isAdmin()) {
    closeModal('adminModal');
    showToast('⛔ Access Denied', 'error');
    return;
  }

  document.getElementById('tabAdminAdd').classList.toggle('active', tab === 'add');
  document.getElementById('tabAdminCatalog').classList.toggle('active', tab === 'catalog');
  document.getElementById('tabAdminSchedule').classList.toggle('active', tab === 'schedule');

  document.getElementById('adminAddMovieContainer').style.display = tab === 'add' ? 'block' : 'none';
  document.getElementById('adminCatalogContainer').style.display = tab === 'catalog' ? 'block' : 'none';
  document.getElementById('adminScheduleContainer').style.display = tab === 'schedule' ? 'block' : 'none';

  if (tab === 'catalog') {
    renderAdminMovieCatalog();
  } else if (tab === 'schedule') {
    populateAdminScheduleDropdowns();
  }
}

// Handle local file selection from input
function handleAdminPosterSelect(e) {
  const file = e.target.files && e.target.files[0];
  if (file) {
    processAdminPosterFile(file);
  }
}

// Process and preview local poster file
function processAdminPosterFile(file) {
  const isValidImage = file.type.startsWith('image/') || /\.(jpg|jpeg|png|webp|jfif|avif|gif)$/i.test(file.name);
  if (!isValidImage) {
    showToast('Please select a valid image file (JPG, PNG, WEBP, AVIF)', 'error');
    return;
  }

  state.adminSelectedPosterFile = file;

  // Show file info badge
  const fileInfo = document.getElementById('adminPosterFileInfo');
  const fileName = document.getElementById('adminPosterFileName');
  const fileSize = document.getElementById('adminPosterFileSize');
  if (fileInfo) fileInfo.style.display = 'flex';
  if (fileName) fileName.textContent = file.name;
  if (fileSize) fileSize.textContent = (file.size / (1024 * 1024)).toFixed(2) + ' MB';

  // Preview local image immediately using object URL
  const img = document.getElementById('adminPosterImg');
  const placeholder = document.getElementById('adminPosterPlaceholder');
  if (img && placeholder) {
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  }
}

// Remove selected poster
function removeSelectedPoster(e) {
  if (e) e.stopPropagation();
  state.adminSelectedPosterFile = null;
  const fileInput = document.getElementById('adminPosterFile');
  if (fileInput) fileInput.value = '';
  const fileInfo = document.getElementById('adminPosterFileInfo');
  if (fileInfo) fileInfo.style.display = 'none';

  const img = document.getElementById('adminPosterImg');
  const placeholder = document.getElementById('adminPosterPlaceholder');
  if (img && placeholder) {
    img.src = '';
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    placeholder.innerHTML = '<div style="font-size: 1.8rem; margin-bottom: 0.3rem;">🖼️</div>Image preview appears here';
  }
}

// Toggle Initial Show Section in Add Movie Form
function toggleAdminShowFields(checked) {
  document.getElementById('adminShowFields').style.display = checked ? 'block' : 'none';
}

// Handle Add Movie Submission
async function handleAdminAddMovie(e) {
  e.preventDefault();
  if (!isAdmin()) {
    showToast('⛔ Access Denied: Only Admin accounts can add movies.', 'error');
    return;
  }

  const btn = document.getElementById('adminAddMovieBtn');
  btn.disabled = true;
  btn.textContent = 'Processing...';

  const movieName = document.getElementById('adminMovieName').value.trim();
  const duration = parseInt(document.getElementById('adminDuration').value, 10);
  const rating = parseFloat(document.getElementById('adminRating').value);
  const releaseDate = document.getElementById('adminReleaseDate').value;

  // Collect Multi-Selected Genres and Languages
  const selectedGenres = Array.from(document.querySelectorAll('#adminGenreChips .multi-chip.active')).map(c => c.dataset.genre);
  const selectedLanguages = Array.from(document.querySelectorAll('#adminLanguageChips .multi-chip.active')).map(c => c.dataset.lang);

  let isValid = true;
  const genreErrorEl = document.getElementById('genreValidationMsg');
  const langErrorEl = document.getElementById('langValidationMsg');

  if (selectedGenres.length === 0) {
    if (genreErrorEl) genreErrorEl.style.display = 'block';
    isValid = false;
  } else {
    if (genreErrorEl) genreErrorEl.style.display = 'none';
  }

  if (selectedLanguages.length === 0) {
    if (langErrorEl) langErrorEl.style.display = 'block';
    isValid = false;
  } else {
    if (langErrorEl) langErrorEl.style.display = 'none';
  }

  if (!isValid) {
    btn.disabled = false;
    btn.textContent = '🚀 Publish Movie to Catalog';
    showToast('Please select at least 1 genre and 1 language', 'warning');
    return;
  }

  try {
    let posterUrl = null;

    // Upload local poster image file if selected
    if (state.adminSelectedPosterFile) {
      btn.textContent = 'Uploading Local Image...';
      const uploadRes = await API.uploadPoster(state.adminSelectedPosterFile, state.jwtToken);
      posterUrl = uploadRes.fileUrl;
    }

    btn.textContent = 'Publishing Movie...';
    const moviePayload = {
      movieName,
      posterUrl,
      genre: selectedGenres[0],
      language: selectedLanguages[0],
      genres: selectedGenres,
      languages: selectedLanguages,
      duration,
      rating,
      releaseDate
    };

    await API.addMovie(moviePayload, state.jwtToken);

    // If also scheduled show
    const alsoShow = document.getElementById('adminAlsoScheduleShow').checked;
    if (alsoShow) {
      const theaterId = parseInt(document.getElementById('adminShowTheater').value, 10);
      const showDate = document.getElementById('adminShowDate').value;
      const showTime = document.getElementById('adminShowTime').value;

      if (theaterId && showDate && showTime) {
        const formattedTime = showTime.length === 5 ? `${showTime}:00` : showTime;
        await API.addShow({
          showDate,
          showStartTime: formattedTime,
          movieName,
          theaterId,
          priceOfClassicSeat: 250,
          priceOfPremiumSeat: 450
        }, state.jwtToken);
      }
    }

    showToast(`🎉 "${movieName}" successfully added to the catalog!`, 'success');

    // Reset form, local image selection, and multi-select chips
    document.getElementById('adminMovieForm').reset();
    removeSelectedPoster();
    resetAdminMovieChips();
    document.getElementById('adminShowFields').style.display = 'none';

    // Refresh catalog
    await loadMovies();
    renderAdminMovieCatalog();
    closeModal('adminModal');

  } catch (err) {
    console.error('Error adding movie:', err);
    showToast(err.message || 'Failed to add movie', 'error');
    if (err.message && (err.message.includes('expired') || err.message.includes('re-login') || err.message.includes('unauthorized'))) {
      openAuthModal('login');
    }
  } finally {
    btn.disabled = false;
    btn.textContent = '🚀 Publish Movie to Catalog';
  }
}

// Populate Theater list for dropdowns
async function populateAdminTheaters() {
  try {
    if (cachedTheaters.length === 0) {
      cachedTheaters = await API.getTheaters();
    }
    const select1 = document.getElementById('adminShowTheater');
    const select2 = document.getElementById('adminSchedTheater');

    const options = cachedTheaters.map(t => `<option value="${t.id}">${t.name} (${t.address})</option>`).join('');
    if (select1) select1.innerHTML = options;
    if (select2) select2.innerHTML = options;
  } catch (err) {
    console.error('Failed to load theaters for admin:', err);
  }
}

// Populate Dropdowns for Standalone Show Scheduling
function populateAdminScheduleDropdowns() {
  populateAdminTheaters();
  const movieSelect = document.getElementById('adminSchedMovie');
  if (movieSelect) {
    movieSelect.innerHTML = state.movies.map(m => {
      const gStr = (m.genres && m.genres.length > 0) ? m.genres.map(formatGenre).join('/') : (m.genre ? formatGenre(m.genre) : '');
      const lStr = (m.languages && m.languages.length > 0) ? m.languages.map(formatLang).join('/') : (m.language ? formatLang(m.language) : '');
      return `<option value="${m.id}">${m.movieName} (${lStr} • ${gStr})</option>`;
    }).join('');
  }
}

// Handle Standalone Schedule Show Form
async function handleAdminScheduleShow(e) {
  e.preventDefault();
  if (!isAdmin()) {
    showToast('⛔ Access Denied: Only Admin accounts can schedule shows.', 'error');
    return;
  }

  const movieId = parseInt(document.getElementById('adminSchedMovie').value, 10);
  const movieObj = state.movies.find(m => m.id === movieId);
  const movieName = movieObj ? movieObj.movieName : '';
  const theaterId = parseInt(document.getElementById('adminSchedTheater').value, 10);
  const showDate = document.getElementById('adminSchedDate').value;
  const rawTime = document.getElementById('adminSchedTime').value;
  const showStartTime = rawTime.length === 5 ? `${rawTime}:00` : rawTime;
  const classicPrice = parseInt(document.getElementById('adminSchedClassicPrice').value, 10) || 250;
  const premiumPrice = parseInt(document.getElementById('adminSchedPremiumPrice').value, 10) || 450;

  try {
    await API.addShow({
      showDate,
      showStartTime,
      movieId,
      movieName,
      theaterId,
      priceOfClassicSeat: classicPrice,
      priceOfPremiumSeat: premiumPrice
    }, state.jwtToken);

    showToast(`🎉 Show scheduled successfully for "${movieName}"!`, 'success');
    closeModal('adminModal');
  } catch (err) {
    showToast(err.message || 'Failed to schedule show', 'error');
  }
}

// Render Admin Movie Catalog Table/List
function renderAdminMovieCatalog() {
  const listEl = document.getElementById('adminMoviesList');
  const countEl = document.getElementById('adminMovieCount');
  if (countEl) countEl.textContent = state.movies.length;
  if (!listEl) return;

  if (state.movies.length === 0) {
    listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No movies found.</div>`;
    return;
  }

  listEl.innerHTML = state.movies.map(m => {
    const catGenres = (m.genres && m.genres.length > 0) ? m.genres.map(formatGenre).join(' • ') : (m.genre ? formatGenre(m.genre) : '');
    const catLangs = (m.languages && m.languages.length > 0) ? m.languages.map(formatLang).join(' • ') : (m.language ? formatLang(m.language) : '');
    return `
    <div class="admin-movie-item">
      <img src="${getPoster(m)}" alt="${m.movieName}" class="admin-movie-thumb" onerror="this.src='${POSTERS.default}'" />
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 700; font-size: 1.05rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${m.movieName}</div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">
          ${catLangs} • ${catGenres} • ${m.duration} min • Released: ${m.releaseDate}
        </div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
          <span class="tag" style="background: rgba(234, 179, 8, 0.15); color: #eab308; font-size: 0.75rem;">★ ${m.rating || '8.5'}</span>
          <span class="tag" style="font-size: 0.75rem;">ID: ${m.id}</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <button class="nav-btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;" onclick="openBookingModal(${m.id}); closeModal('adminModal');">
          View Shows
        </button>
        <button class="nav-btn" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);" onclick="handleAdminDeleteMovie(${m.id}, '${m.movieName.replace(/'/g, "\\'")}')" title="Delete Movie">
          🗑️ Delete
        </button>
      </div>
    </div>
  `}).join('');
}

// Handle Admin Delete Movie
async function handleAdminDeleteMovie(movieId, movieName) {
  if (!isAdmin()) {
    showToast('⛔ Access Denied: Only Admin accounts can delete movies.', 'error');
    return;
  }

  const confirmed = confirm(`Are you sure you want to delete "${movieName}"?\n\nThis will permanently delete the movie and remove all scheduled shows and bookings associated with it.`);
  if (!confirmed) return;

  try {
    showToast(`Deleting "${movieName}"...`, 'info');
    await API.deleteMovie(movieId, state.jwtToken);
    showToast(`🗑️ "${movieName}" was successfully deleted!`, 'success');

    // Reload movies globally and re-render admin catalog
    await loadMovies();
    renderAdminMovieCatalog();
  } catch (err) {
    console.error('Failed to delete movie:', err);
    showToast(err.message || 'Failed to delete movie', 'error');
    if (err.message && (err.message.includes('expired') || err.message.includes('re-login') || err.message.includes('unauthorized'))) {
      openAuthModal('login');
    }
  }
}
