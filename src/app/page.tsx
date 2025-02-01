import { Suspense } from 'react';

import { MoviesList } from '@/app/components/MoviesList/MoviesList';
import { Title } from '@/app/components/Title/Title';
import { MovieModal } from '@/app/components/MovieModal/MovieModal';
import { DialogSkeleton } from '@/app/components/DialogSkeleton/DialogSkeleton';
import { MovieListSkeleton } from '@/app/components/MovieItemSkeleton/MovieItemSkeleton';

import styles from './Page.module.scss';

type Props = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const { movie } = await searchParams;

  return (
    <>
      <div className={styles.pageWrapper}>
        <Title />
        <Suspense fallback={<MovieListSkeleton />}>
          <MoviesList />
        </Suspense>
      </div>
      {movie && (
        <Suspense key={movie} fallback={<DialogSkeleton />}>
          <MovieModal movieId={movie} />
        </Suspense>
      )}
    </>
  );
}
