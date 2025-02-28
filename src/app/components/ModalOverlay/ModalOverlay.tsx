import styles from './ModalOverlay.module.scss';

type ModalOverlayProps = {
  children: React.ReactNode;
};

export const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={styles.modalOverlay}
    >
      <div className={styles.modalProviderWrapper}>{children}</div>
    </div>
  );
};
