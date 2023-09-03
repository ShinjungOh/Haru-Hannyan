import { OverlayOption } from '@ui/components/layout/overlay/OverlayProvider';
import useModal from '@lib/hooks/useModal';
import ConfirmModal, { ConfirmModalType } from '@ui/components/layout/modal/ConfirmModal';

type ConfirmModalProps = {
  modalType: ConfirmModalType;
  title: string;
  description: string;
  onBack: () => void;
};

export default function useConfirm() {
  const modal = useModal();

  const showConfirm = async (
    { modalType, title, description, onBack }: ConfirmModalProps,
    options?: OverlayOption,
  ): Promise<boolean> => {
    const submitResult = await modal<boolean>(
      <ConfirmModal modalType={modalType} title={title} description={description} onBack={onBack} />,
      options,
    );
    return submitResult;
  };

  return showConfirm;
}
