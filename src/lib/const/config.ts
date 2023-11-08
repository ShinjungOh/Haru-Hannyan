export const BASE_URL = 'http://133.186.251.22:3001/api';
export const API_TIMEOUT = 3000;

const KAKAO_CLIENT_ID = 'a3d08c94732b0c85334d04b474f49873';
const KAKAO_REDIRECT_URL = 'http://haru-hannyan.com/oauth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
