import { OverlayOption } from '@ui/components/overlay/OverlayProvider';
import { AlertModal, AlertModalType } from '@ui/components/modal';
import { useModal } from '@lib/hooks';

type AlertModalProps = {
  type: AlertModalType;
  title: string;
};

export function useAlert() {
  const modal = useModal();

  const showAlert = async ({ type, title }: AlertModalProps, options?: OverlayOption): Promise<boolean> => {
    const submitResult = await modal(<AlertModal type={type} title={title} />, options);
    return submitResult;
  };

  return showAlert;
}
