import { notFound } from 'next/navigation';

import { convertMovieSchema } from '@/app/utils/convertMovieSchema';
import type { Movie_API } from '@/app/types/movie';

type MovieResponse = {
  results: Movie_API[];
  page: number;
  total_pages: number;
  total_results: number;
};

// By default page is 1, i didn't implement pagination cause its not in reuqirements
// Also, no need to catch errors here, it will be catched in the component
export async function getMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API_KEY}`,
    {
      cache: 'force-cache',
    }
  );
  const data: MovieResponse = await res.json();
  if (!data) notFound();

  return convertMovieSchema(data.results);
}
