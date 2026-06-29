import axios from "axios";
import useAuthStore from "../stores/authStore";
// 1. Axios 인스턴스 설정

// baseURL을 상태 경로로 설정합니다.
// 절대 경로 -> http://localhost:5671/api 아닌 상대 경로 /api 설정합니다.
// 이렇게 해야 브라우저 Vite 개발서버 포트 번호로 동작을 합니다.
const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000, // 10초 이상 응답이 없으면 에러 처리
});

// 2. 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // React 컴포넌트 외부의 순수 JS파일이므로
    // getStore()를 사용하여 상탤를 읽어 올 수 있다.
    const token = useAuthStore.getState().token;
    if (token) {
      // 토큰이 존재 한다면 HTTP 표준 인증 헤더인 'Bearer' 타입으로 토큰을 자동 저장합니다.
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 3. 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 만약 401에러 감지 시 자동 로그아웃 처리 (토큰 만료, 미인증 접근 요청 시 )
    // ? <-- reponse? <-- null에 안정적으로 동작한다.
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      //window.location.href = "/login"; // 자동 로그인 페이지 이동
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
