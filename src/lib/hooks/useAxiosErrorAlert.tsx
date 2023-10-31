import { useNavigate } from 'react-router';
import { useAlert } from '@lib/hooks/useAlert';
import { PATH } from '@lib/const/path';
import { handleAxiosError } from '../../api/http';

export function useAxiosErrorAlert() {
  const navigate = useNavigate();
  const alert = useAlert();

  const axiosErrorAlert = async (e: any) => {
    const error = handleAxiosError(e);
    const responseAlert = await alert({
      type: 'danger',
      title: error.msg,
    });

    if (error.msg === '올바른 접근이 아닙니다.' && responseAlert) {
      localStorage.clear();
      navigate(PATH.HOME, { replace: true });
    }
  };

  return axiosErrorAlert;
}
