import styles from './MovieItemSkeleton.module.scss';

const MovieItemSkeleton = () => {
  return (
    <li
      className={styles.skeletonContainer}
      role="presentation"
      aria-hidden="true"
    >
      <div className={styles.skeletonWrapper} role="presentation">
        <div className={styles.imageContainer} role="presentation" />
        <div className={styles.contentContainer} role="presentation">
          <div className={styles.titleSkeleton} role="presentation" />
          <div className={styles.dateSkeleton} role="presentation" />
        </div>
      </div>
    </li>
  );
};

export const MovieListSkeleton = () => {
  return (
    <div
      className={styles.skeletonList}
      role="alert"
      aria-busy="true"
      aria-label="Loading movie list"
    >
      {[...Array(6)].map((_, index) => (
        <MovieItemSkeleton key={index} />
      ))}
    </div>
  );
};
