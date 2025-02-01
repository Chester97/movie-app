import Image from 'next/image';

import styles from './Title.module.scss';

export const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.title__imageWrapper}>
        <Image
          src="/movie_title.svg"
          alt="List of movies icon"
          className={styles.title__image}
          sizes="(min-width: 1440px) 40px, 34px"
          fill
          priority
        />
      </div>
      <h1 className={styles.title__caption}>movies</h1>
    </div>
  );
};

// NOTE: I left BEM in purpose here, just to show that I understand the concept more or less. However, BEM brings a nested classes,
// and I don't really like that. That's why I used BEM in this easy and samll component to prevent having nested classes in more complex components.
