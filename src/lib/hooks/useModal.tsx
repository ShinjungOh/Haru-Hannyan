import { ReactElement } from 'react';
import { OverlayOption, useOverlay } from '@ui/components/layout/overlay/OverlayProvider';

export default function useModal() {
  const overlay = useOverlay();

  const showModal = async (component: ReactElement, options?: OverlayOption) => {
    const submitResult = await overlay(component, options);
    return submitResult;
  };

  return showModal;
}
