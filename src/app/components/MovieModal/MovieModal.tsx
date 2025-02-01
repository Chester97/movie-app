import { getMovie } from '@/app/api/getMovie';
import { Dialog } from '@/app/components/Dialog/Dialog';
import { ModalOverlay } from '@/app/components/ModalOverlay/ModalOverlay';

type MovieModalProps = {
  movieId: string;
};

export const MovieModal = async ({ movieId }: MovieModalProps) => {
  const movie = await getMovie(movieId);

  return (
    <ModalOverlay>
      <Dialog movie={movie} />
    </ModalOverlay>
  );
};
