import useModal from '@lib/hooks/useModal';
import AlertModal, { AlertModalType } from '@ui/components/modal/AlertModal';
import { OverlayOption } from '@ui/components/overlay/OverlayProvider';

type AlertModalProps = {
  type: AlertModalType;
  title: string;
};

export default function useAlert() {
  const modal = useModal();

  const showAlert = async ({ type, title }: AlertModalProps, options?: OverlayOption): Promise<boolean> => {
    const submitResult = await modal(<AlertModal type={type} title={title} />, options);
    return submitResult;
  };

  return showAlert;
}
