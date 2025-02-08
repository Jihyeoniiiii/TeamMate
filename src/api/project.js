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

export const fetchProject = async ({
  page = 1,
  recruiting,
  position,
  tech,
  title,
} = {}) => {
  try {
    const response = await apiClient.get(`/projects`, {
      params: { page, recruiting, position, tech, title },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetch project:", error);
    throw error;
  }
}

export const updateFavorite = async (projectId) => {
  try {
    const response = await apiClient.post(`/projects/${projectId}/favorite`);
    return response.data;
  } catch (error) {
    console.error("Error favorite update:", error);
    throw error;
  }
};

export const fetchMainProject = async () => {
  try {
    const response = await apiClient.get(`/projects/main`);
    return response.data;
  } catch (error) {
    console.error("Error fetch project:", error);
    throw error;
  }
}