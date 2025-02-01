import Image from 'next/image';

import Link from 'next/link';
import cx from 'classnames';

import { MovieItemContent } from '@/app/components/MovieItemContent/MovieItemContent';
import type { Movie } from '@/app/types/movie';

import styles from './Dialog.module.scss';

type DialogProps = {
  movie: Movie;
};

export const Dialog = ({ movie }: DialogProps) => {
  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.dialogImageWrapper}>
        <Image
          src={movie.imageUrl}
          alt={`${movie.title} poster`}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          className={cx(styles.dialogImage, {
            [styles.dialogImage__blurred]: false,
          })}
          width={120}
          height={180}
          sizes="120px"
        />
      </div>
      <MovieItemContent
        title={movie.title}
        release_date={movie.release_date}
        overview={movie.overview}
      />
      <Link
        href="/"
        scroll={false}
        className={styles.dialogCloseButton}
      >
        <Image
          src="/close.svg"
          alt="Close dialog"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};
