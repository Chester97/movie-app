import styles from './MovieItemSkeleton.module.scss';

const MovieItemSkeleton = () => {
  return (
    <li className={styles.skeletonContainer}>
      <div className={styles.skeletonWrapper}>
        <div className={styles.imageContainer} />
        <div className={styles.contentContainer}>
          <div className={styles.titleSkeleton} />
          <div className={styles.dateSkeleton} />
        </div>
      </div>
    </li>
  );
};

export const MovieListSkeleton = () => {
  return (
    <div className={styles.skeletonList}>
      {[...Array(6)].map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </div>
  );
};
