import dynamic from 'next/dynamic';

import { DialogSkeleton } from '@/app/components/DialogSkeleton/DialogSkeleton';

export enum Modals {
  DIALOG,
}

export const ModalManager = {
  [Modals.DIALOG]: dynamic(
    () =>
      import('@/app/components/Dialog/Dialog').then(
        (mod) => mod.Dialog
      ),
    {
      loading: () => <DialogSkeleton />,
    }
  ),
};
