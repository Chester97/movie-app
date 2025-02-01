import { getMovies } from '@/app/api/getMovies';

import styles from './MoviesList.module.scss';
import { MovieItem } from '../MovieItem/MovieItem';

export const MoviesList = async () => {
  const data = await getMovies();

  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        <h2 className={styles.moviesCaption}>Most popular</h2>
        <ul className={styles.moviesListContainer} role="list">
          {data.length &&
            data.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
        </ul>
      </div>
    </div>
  );
};

// NOTE: Here insted of BEM I used somehting that suits me and I worke with for a long time. It's kind of BEM but each class is separat.
// This approach doesn't mess up with .module.scss file, and everything is more readable(at least for me).
