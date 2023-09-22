import { useAlert } from '@lib/hooks/useAlert';
import { handleAxiosError } from '../../api/http';

export function useAxiosErrorAlert() {
  const alert = useAlert();

  const axiosErrorAlert = async (e: any) => {
    const error = handleAxiosError(e);
    await alert({
      type: 'danger',
      title: error.msg,
    });
  };

  return axiosErrorAlert;
}
