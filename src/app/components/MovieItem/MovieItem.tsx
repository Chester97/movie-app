'use client';

import { useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { MovieItemContent } from '@/app/components/MovieItemContent/MovieItemContent';
import type { Movie } from '@/app/types/movie';

import styles from './MovieItem.module.scss';

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <li className={styles.movieItemContainer}>
      <Link
        href={`/?movie=${movie.id}`}
        className={styles.movieItemLink}
        scroll={false}
      >
        <div className={styles.movieItemImageWrapper}>
          <Image
            src={movie.imageUrl}
            alt={`${movie.title} poster`}
            onLoad={() => setImageLoading(false)}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            className={cx(styles.movieItemImage, {
              [styles.movieItemImage__blurred]: isImageLoading,
            })}
            width={72}
            height={100}
            sizes="72px"
          />
        </div>
        <MovieItemContent
          title={movie.title}
          release_date={movie.release_date}
        />
      </Link>
    </li>
  );
};
