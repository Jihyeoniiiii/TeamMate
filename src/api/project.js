import axios from "axios";
import { store } from "../store/index.js";

export const createProject = async () => {
  const projectState = store.getState().project;

  try {
    const response = await axios.post("/projects", projectState, {});
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
