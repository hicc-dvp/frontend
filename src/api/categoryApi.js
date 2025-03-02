// src/api/categoryApi.js
import axiosInstance from "./axiosInstance";

// 전체 카테고리 조회
export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.error("카테고리 조회 실패:", error);
    throw error;
  }
};

// 특정 카테고리의 검색어(메인디쉬) 조회
export const fetchSearchQueries = async (categoryId) => {
  try {
    const response = await axiosInstance.get(
      `/categories/${categoryId}/search-queries`
    );
    return response.data;
  } catch (error) {
    console.error("검색어 조회 실패:", error);
    throw error;
  }
};
