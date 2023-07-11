import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://133.186.144.153:3001/api/user',
  timeout: 3000,
});

export const requestGet = ({ url, headers }: { url: string; headers?: any }) =>
  client.get(url, {
    headers: {
      ...headers,
    },
  });

export const requestPost = ({ url, headers, data }: { url: string; headers?: any; data: any }) =>
  client.post(url, data, {
    headers: {
      ...headers,
    },
  });

export const requestPut = ({ url, headers, data }: { url: string; headers?: any; data?: any }) =>
  client.put(url, data, {
    headers: {
      ...headers,
    },
  });

export const requestDelete = ({ url, headers }: { url: string; headers?: any }) =>
  client.delete(url, {
    headers: {
      ...headers,
    },
  });
