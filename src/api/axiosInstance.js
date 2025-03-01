// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 환경 변수에서 API URL 가져오기
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 필요하면 쿠키 포함
});

// 공통 GET 요청 함수
export const getRequest = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`GET 요청 실패: ${url}`, error);
    throw error;
  }
};

// 공통 POST 요청 함수
export const postRequest = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`POST 요청 실패: ${url}`, error);
    throw error;
  }
};

export default axiosInstance;
