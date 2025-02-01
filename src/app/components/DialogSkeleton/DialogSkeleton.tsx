import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import styles from './DialogSkeleton.module.scss';

export const DialogSkeleton = () => {
  return (
    <ModalOverlay>
      <div className={styles.dialogWrapper}>
        <div className={styles.skeletonImage} />
        <div className={styles.skeletonContent}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonDate} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} />
          <div className={styles.skeletonText} />
        </div>
      </div>
    </ModalOverlay>
  );
};
