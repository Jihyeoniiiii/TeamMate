export const handleApiError = (status, code) => {
  const errorMessages = {
    200: {
      COMMON200: {
        codeName: "_OK",
        message: "요청에 성공하였습니다.",
      },
    },
    201: {
      COMMON201: {
        codeName: "_CREATED",
        message: "회원가입에 성공하였습니다.",
      },
    },
    400: {
      COMMON400: {
        codeName: "_BAD_REQUEST",
        message: "잘못된 요청입니다. 입력 필드 값을 확인해주세요.",
      },
      UNIV4002: {
        codeName: "INVALID_UNIV_NAME",
        message: "인증이 불가능한 학교명입니다.",
      },
      UNIV4003: {
        codeName: "STUDENT_AUTH_FAILED",
        message: "재학생 인증에 실패하였습니다.",
      },
      UNIV4004: {
        codeName: "INVALID_CODE",
        message: "인증 코드가 일치하지 않습니다.",
      },
      USER4003: {
        codeName: "DUPLICATED_NICKNAME",
        message: "이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.",
      },
    },
    401: {
      JWT4001: {
        codeName: "TOKEN_INVALID",
        message: "토큰이 유효하지 않습니다.",
      },
      USER4005: {
        codeName: "LOGIN_FAILURE",
        message: "로그인에 실패하였습니다. 아이디나 비밀번호가 일치하지 않습니다.",
      },
    },
    409: {
      UNIV4001: {
        codeName: "EMAIL_EXISTS",
        message: "회원 정보가 이미 존재합니다. 로그인해주세요.",
      },
      UNIV4005: {
        codeName: "ALREADY_AUTHENTICATED",
        message: "인증 정보가 이미 존재합니다. 인증 코드 검증 없이 회원가입을 진행하세요.",
      },
    },
  };

  const error = errorMessages[status]?.[code];
  if (error) {
    return `${error.codeName}: ${error.message}`;
  }
  return "알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요.";
};
