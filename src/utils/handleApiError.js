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
        message: "요청에 성공하였습니다.",
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
      USER4007: {
        codeName: "OWN_PROJECT",
        message: "자신의 프로젝트에는 지원할 수 없습니다.",
      },
      PRO4004 : {
        codeName: "ALREADY_COMPLETED_PROJECT",
        message: "이미 모집이 마감된 프로젝트입니다.",
      },
      PRO4003 : {
        codeName: "ALREADY_MATCHING_END_POSITION",
        message: "이미 모집이 마감된 포지션입니다.",
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
    403: {
      COMMON403: {
        codeName: "_FORBIDDEN",
        message: "접근 권한이 없습니다.",
      },
    },
    404: {
      USER4001: {
        codeName: "USER_NOT_FOUND",
        message: "사용자 정보를 찾을 수 없습니다.",
      },
      PLAT4001: {
        codeName: "PLATFORM_NOT_FOUND",
        message: "플랫폼 정보를 찾을 수 없습니다.",
      },
      POS4001: {
        codeName: "POSITION_NOT_FOUND",
        message: "포지션 정보를 찾을 수 없습니다.",
      },
      PRO4001: {
        codeName: "PROJECT_NOT_FOUND",
        message: "프로젝트 정보를 찾을 수 없습니다.",
      },
      PRO4002: {
        codeName: "PROJECT_POSITION_NOT_FOUND",
        message: "프로젝트 포지션 정보를 찾을 수 없습니다.",
      },
      RES4001: {
        codeName: "RESUME_NOT_FOUND",
        message: "이력서를 찾을 수 없습니다.",
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
