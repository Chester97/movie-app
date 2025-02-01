'use client';

import styles from './Page.module.scss';

type ErrorProps = {
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className={styles.pageWrapper}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
