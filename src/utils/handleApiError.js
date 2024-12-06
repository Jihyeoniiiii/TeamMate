export const handleApiError = (status, code) => {
  const errorMessages = {
    200: {
      COMMON200: "인증 코드 검증에 성공하였습니다.",
    },
    400: {
      COMMON400: "잘못된 요청입니다. 입력값을 확인해주세요.",
      UNIV4002: "인증이 불가능한 학교명입니다.",
      UNIV4004: "인증 코드가 일치하지 않습니다.",
    },
    404: {
      UNIV4003: "재학생 인증에 실패하였습니다.",
    },
    409: {
      UNIV4001: "회원정보가 이미 존재합니다. 로그인해주세요.",
      UNIV4005: "인증 정보가 이미 존재합니다. 인증 코드 요청 없이 회원가입을 진행하세요.",
    },
  };

  return errorMessages[status]?.[code] || "알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.";
};
