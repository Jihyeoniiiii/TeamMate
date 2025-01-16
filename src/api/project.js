import { store } from "../store/index.js";
import apiClient from "./apiClient.js";

export const createProject = async () => {
  const projectState = store.getState().project;

  try {
    const response = await apiClient.post("/projects", projectState);
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const updateFavorite = async (projectId) => {
  try {
    const response = await apiClient.post(`/projects/${projectId}/favorite`);
    return response.data;
  } catch (error) {
    console.error("Error favorite update:", error);
    throw error;
  }
};
