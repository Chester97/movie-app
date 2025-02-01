'use client';

import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { Movie } from '@/app/types/movie';
import { generateUniqueId } from '@/app/utils/generateUniqueId';

import { ModalManager, Modals } from './modal-manager';

import styles from './ModalProvider.module.scss';

type ModalContextType = {
  openModal: (modalName: Modals, movie: Movie) => void;
  closeModal: (modalName: Modals) => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

type ModalProviderProps = {
  children: React.ReactNode;
  initialMovies?: Movie[];
};

type ActiveModalState = {
  id: string;
  name: Modals;
  movie: Movie;
}[];

export const ModalProvider = ({
  children,
  initialMovies,
}: ModalProviderProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [movies] = useState<Movie[]>(() => initialMovies || []);
  const [activeModal, setActiveModal] = useState<ActiveModalState>(
    []
  );

  useEffect(() => {
    const movie = searchParams.get('movie');
    if (movie && movies.length > 0) {
      const selectedMovie = movies.find(
        (m) => m.id === Number(movie)
      );
      if (selectedMovie) {
        openModal(Modals.DIALOG, selectedMovie);
      } else {
        router.replace('/');
      }
    }
  }, []);

  const openModal = useCallback((modalName: Modals, movie: Movie) => {
    setActiveModal((prev) => [
      ...prev,
      { id: generateUniqueId(), name: modalName, movie },
    ]);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback((modalName: Modals) => {
    setActiveModal((prev) =>
      prev.filter((modal) => modal.name !== modalName)
    );
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'unset';
    }
    router.replace('/');
  }, []);

  const contextValue = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {activeModal.length > 0 && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalProviderWrapper}>
            {activeModal.map((modal) => {
              const ModalComponent = ModalManager[modal.name];
              return (
                <ModalComponent key={modal.id} movie={modal.movie} />
              );
            })}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
