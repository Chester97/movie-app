'use client';

import { useEffect } from 'react';
import { FocusTrap } from 'focus-trap-react';

import styles from './ModalOverlay.module.scss';

type ModalOverlayProps = {
  children: React.ReactNode;
};

export const ModalOverlay = ({ children }: ModalOverlayProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <FocusTrap>
      <div
        role="dialog"
        aria-modal="true"
        className={styles.modalOverlay}
      >
        <div className={styles.modalProviderWrapper}>{children}</div>
      </div>
    </FocusTrap>
  );
};
