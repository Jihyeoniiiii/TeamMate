import axios from "axios";
import apiClient from "./apiClient";

export const verifyStudent = async ({email, school}) => {
  try {
      const response = await axios.post("/auth/student/verify", {
          email,
          univ_name: school
      });
      return response.data;
  } catch (error) {
      console.error("verifyStudent error:", error);
      throw error;
  }
};

export const confirmCode = async ({email, school, code}) => {
  try {
      const response = await axios.post("/auth/student/confirm", {
          email,
          univ_name: school,
          code
      });
      return response.data;
  } catch (error) {
      console.error("confirmCode error:", error);
      throw error;
  }
};

export const submitSignup = async ({email, password, nickname}) => {
  try {
      const response = await axios.post("/signup", {
          email,
          password,
          nickname
      });
      return response.data;
  } catch (error) {
      console.error("submitSignup error:", error);
      throw error;
  }
};

export const submitLogin = async ({email, password}) => {
  try {
      const response = await axios.post("/login", {
          email,
          password
      });
      return response.data;
  } catch (error) {
      console.error("submitLogin error:", error);
      throw error;
  }
};


export const refreshAcessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("Refresh token is missing");
  }
  
  try {
    const response = await apiClient.post("/refresh", { refresh_token: refreshToken });
    const newAccessToken = response.data.result.access_token;
    sessionStorage.setItem("access_token", newAccessToken);
  } catch (error) {
      console.log(error);
  }
}