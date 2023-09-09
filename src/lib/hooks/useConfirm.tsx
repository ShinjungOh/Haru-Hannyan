import { OverlayOption } from '@ui/components/overlay/OverlayProvider';
import useModal from '@lib/hooks/useModal';
import ConfirmModal, { ConfirmModalType } from '@ui/components/modal/ConfirmModal';

type ConfirmModalProps = {
  type: ConfirmModalType;
  title: string;
  description: string;
};

export default function useConfirm() {
  const modal = useModal();

  const showConfirm = async (
    { type, title, description }: ConfirmModalProps,
    options?: OverlayOption,
  ): Promise<boolean> => {
    const submitResult = await modal<boolean>(
      <ConfirmModal type={type} title={title} description={description} />,
      options,
    );
    return submitResult;
  };

  return showConfirm;
}
