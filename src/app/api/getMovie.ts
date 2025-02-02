import { Movie_API } from '@/app/types/movie';
import { generateSchema } from '@/app/utils/convertMovieSchema';

import { redirect } from 'next/navigation';

export async function getMovie(movieId: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIES_API_KEY}`,
      {
        cache: 'force-cache',
      }
    );

    if (!res.ok) return redirect('/');

    const data: Movie_API = await res.json();
    if (!data) redirect('/');

    return generateSchema(data);
  } catch (e) {
    redirect('/');
  }
}
