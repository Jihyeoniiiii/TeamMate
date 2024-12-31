import axios from "axios";
// import { refreshAccessToken } from "./auth";

const apiClient = axios.create({
  baseURL: "/",
  headers: { "Content-Type": "application/json" },
});

// apiClient 인터셉터는 백엔드 연동 후 사용

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // access_token이 만료되어 401 상태 코드가 반환된 경우
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // 재시도 방지 플래그

//       try {
//         // refresh_token을 사용하여 새로운 access_token 발급
//         const newAccessToken = await refreshAccessToken();
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return apiClient(originalRequest); // 실패한 요청 재시도
//       } catch (refreshError) {
//         console.error("토큰 갱신 실패:", refreshError);
//         throw refreshError; // 갱신 실패 시 에러 전달
//       }
//     }

//     return Promise.reject(error); // 다른 에러는 그대로 호출자에게 전달
//   }
// );

export default apiClient;
