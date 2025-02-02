import { ModalOverlay } from '@/app/components/ModalOverlay/ModalOverlay';
import styles from './DialogSkeleton.module.scss';

export const DialogSkeleton = () => {
  return (
    <ModalOverlay>
      <div
        role="alert"
        aria-busy="true"
        aria-label="Loading movie details"
        className={styles.dialogWrapper}
      >
        <div
          role="presentation"
          aria-hidden="true"
          className={styles.skeletonImage}
        />
        <div aria-hidden="true" className={styles.skeletonContent}>
          <div role="presentation" className={styles.skeletonTitle} />
          <div role="presentation" className={styles.skeletonDate} />
          <div role="presentation" className={styles.skeletonText} />
          <div role="presentation" className={styles.skeletonText} />
          <div role="presentation" className={styles.skeletonText} />
        </div>
      </div>
    </ModalOverlay>
  );
};
