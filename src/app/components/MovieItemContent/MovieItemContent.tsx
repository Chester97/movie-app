import Image from 'next/image';
import cx from 'classnames';

import { Movie } from '@/app/types/movie';
import styles from './MovieItemContent.module.scss';

type MovieItemContentProps = {
  title: Movie['title'];
  release_date: Movie['release_date'];
  overview?: Movie['overview'];
};

export const MovieItemContent = ({
  title,
  release_date,
  overview,
}: MovieItemContentProps) => {
  return (
    <div className={styles.movieItemContent}>
      <h3
        className={cx(styles.movieItemName, {
          [styles.movieItemName__dialog]: overview,
        })}
      >
        {title}
      </h3>
      <div
        className={styles.movieItemReleaseDate}
        aria-label="Data premiery"
      >
        <Image
          src="/movie_releaseDate.svg"
          alt="Movie release date icon"
          width={16}
          height={16}
        />
        <time dateTime={release_date}>{release_date}</time>
      </div>
      {overview && (
        <p className={styles.movieItemOverview}>{overview}</p>
      )}
    </div>
  );
};
