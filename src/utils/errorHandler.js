import { handleApiError } from "./handleApiError";

export const processError = (error) => {
  if (error.status && error.code) {
    const errorMessage = handleApiError(error.status, error.code);
    alert(errorMessage);
  } else {
    console.error("네트워크 오류:", error);
    alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};
