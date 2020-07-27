//import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd41815",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd41817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd41819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6bccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd4181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6bccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd4181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6bccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd4181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd4181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6bccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd41821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6bccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
