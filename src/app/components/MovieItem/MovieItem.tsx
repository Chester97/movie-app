'use client';

import { useState } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import type { Movie } from '@/app/types/movie';

import styles from './MovieItem.module.scss';
import { useModal } from '@/app/contexts/ModalProvider';
import { Modals } from '@/app/contexts/modal-manager';
import { MovieItemContent } from '../MovieItemContent/MovieItemContent';
import Link from 'next/link';

type MovieItemProps = {
  movie: Movie;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const [isImageLoading, setImageLoading] = useState(true);
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(Modals.DIALOG, movie);
  };

  return (
    <li
      className={styles.movieItemContainer}
      onClick={handleOpenModal}
    >
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
