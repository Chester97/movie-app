import type { Movie, Movie_API } from '@/app/types/movie';

export const generateYear = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string');
  }

  return String(date.getFullYear());
};

export const generateSchema = (movie: Movie_API) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    release_date: generateYear(movie.release_date),
    imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  };
};

export const convertMovieSchema = (movies: Movie_API[]) => {
  const getOnly6Movies = movies.slice(0, 6);
  const result: Movie[] = getOnly6Movies.map((movie) =>
    generateSchema(movie)
  );

  return result;
};
