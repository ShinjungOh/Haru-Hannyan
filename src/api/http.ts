import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import qs from 'qs';
import { API_TIMEOUT, BASE_URL } from '@lib/const/config';
import { ACCESS_TOKEN_KEY } from '@lib/const/localstorage';

type APIResponse<T = unknown> = {
  success: boolean;
  msg: string;
  data?: T;
};

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  timeoutErrorMessage: '서버 요청 시간 초과',
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
});

const handleHeadersWithAccessToken = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || '';
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  return config as InternalAxiosRequestConfig;
};

client.interceptors.request.use(handleHeadersWithAccessToken);
client.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error),
);

export const http = {
  get: function get<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    return client.get<APIResponse<Response>>(url, config).then((res) => res.data);
  },
  post: function post<Response = unknown, Request = any>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return client.post<APIResponse<Response>>(url, data, config).then((res) => res.data);
  },
  put: function put<Response = unknown, Request = any>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return client.put<APIResponse<Response>>(url, data, config).then((res) => res.data);
  },
  patch: function patch<Response = unknown, Request = any>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return client.patch<APIResponse<Response>>(url, data, config).then((res) => res.data);
  },
  delete: function del<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    return client.delete<APIResponse<Response>>(url, config).then((res) => res.data);
  },
};

export const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    console.error('Axios Error:', axiosError);
    return axiosError.response?.data as APIResponse;
  }
  console.log('Unknown Error: ', error);
  return {
    success: false,
    msg: '알 수 없는 오류가 발생했어요.',
  };
};
