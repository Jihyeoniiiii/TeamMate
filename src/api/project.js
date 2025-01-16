import axios from "axios";
import { store } from "../store/index.js";

export const createProject = async () => {
  const projectState = store.getState().project;
  const accessToken = sessionStorage.getItem("access_token");

  if (!accessToken) {
    throw new Error("Access token is missing");
  }

  try {
    const response = await axios.post(
      "/projects",
      projectState,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const updateFavorite = async (projectId) => {
  const accessToken = sessionStorage.getItem("access_token"); // 토큰 가져오기

  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  
  try {
    const response = await axios.post(`/projects/${projectId}/favorite`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error favorite update:", error);
    throw error;
  }
}