import Image from 'next/image';
import cx from 'classnames';

import { MovieItemContent } from '@/app/components/MovieItemContent/MovieItemContent';
import type { Movie } from '@/app/types/movie';

import styles from './Dialog.module.scss';
import { DialogCloseButton } from '../DialogCloseButton/DialogCloseButton';
import { useModal } from '@/app/contexts/ModalProvider';
import { Modals } from '@/app/contexts/modal-manager';

type DialogProps = {
  movie: Movie;
};

export const Dialog = ({ movie }: DialogProps) => {
  const { closeModal } = useModal();

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
      <DialogCloseButton
        onClick={() => closeModal(Modals.DIALOG)}
        className={styles.dialogCloseButton}
      />
    </div>
  );
};
