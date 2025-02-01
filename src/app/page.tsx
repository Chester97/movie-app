import { getMovies } from '@/app/api/getMovies';
import { ModalProvider } from '@/app/contexts/ModalProvider';
import { MoviesList } from '@/app/components/MoviesList/MoviesList';
import { Title } from '@/app/components/Title/Title';

import styles from './Page.module.scss';

export default async function Home() {
  const data = await getMovies();

  return (
    <ModalProvider initialMovies={data}>
      <div className={styles.pageWrapper}>
        <Title />
        <MoviesList />
      </div>
    </ModalProvider>
  );
}
