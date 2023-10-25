import { http } from '../http';

type RequestPatchName = {
  name: string;
};

export const apiPatchName = (name: string) =>
  http.patch<RequestPatchName>('/user', {
    name,
  });
