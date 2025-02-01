import Image from 'next/image';
import { MouseEventHandler } from 'react';
import cx from 'classnames';

import styles from './DialogCloseButton.module.scss';

type DialogCloseButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
};

export const DialogCloseButton = ({
  onClick,
  className,
}: DialogCloseButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.dialogCloseButton, className)}
    >
      <Image
        src="/close.svg"
        alt="Close dialog"
        width={20}
        height={20}
      />
    </button>
  );
};
