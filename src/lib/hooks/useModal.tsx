import { ReactElement } from 'react';
import { OverlayOption, useOverlay } from '@ui/components/overlay';

export function useModal() {
  const overlay = useOverlay();

  const showModal = async <T = any,>(component: ReactElement, options?: OverlayOption): Promise<T> => {
    const submitResult = await overlay(component, options);
    return submitResult as T;
  };

  return showModal;
}
