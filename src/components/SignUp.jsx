import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthData } from "../store/authSlice"
import { handleApiError } from "../utils/handleApiError";
import { confirmCode, submitSignup, verifyStudent } from "../api/auth";

const SignUp = ({ setType }) => {
  const dispatch = useDispatch();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    nickname: "",
  })

  const processError = (error) => {
    if (error.status && error.code) {
      const errorMessage = handleApiError(error.status, error.code);
      alert(errorMessage);
    } else {
      console.error("네트워크 오류:", error);
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleVerification = async () => {
    const{ email, school } = formData;

    if(!email || !school){
      alert("모두 입력해주세요!")
      return;
    }

    try {
      const data = await verifyStudent({email, school});
      setIsInputVisible(true);
      console.log("인증 요청: ", data);
    } catch (error) {
      processError(error);
    }
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }

  const handleConfirmCode = async () => {
    const{ email, school } = formData;

    try {
      const data = await confirmCode({email, school, code});
      setIsVerified(true);
      console.log("인증 성공: ", data);
    } catch (error) {
      processError(error);
    }
  }

  const handleSubmit = async () => {
    const{ email, password, nickname, confirmPassword } = formData;
    
    if (!email || !password || !nickname || !confirmPassword) {
      alert("모든 입력값을 채워주세요!");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    dispatch(setAuthData({ email, password, nickname }));

    try {
      const data = await submitSignup({email, password, nickname});
      console.log("회원가입 성공: ", data);
      setType("login");
    } catch (error) {
      processError(error);
    }
  };

  return (
    <>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        disabled={isVerified}
        placeholder="학교 이메일"
      />
      <Input
        type="text"
        name="school"
        value={formData.school}
        onChange={handleChange}
        disabled={isVerified}
        placeholder="학교명"
      />
      <ButtonWrapper>
        <Button text="인증하기" onClick={handleVerification}></Button>
      </ButtonWrapper>
      {isInputVisible &&
        <VerificationWrapper>
            <VerificationInput
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="인증코드"
            />
            <ButtonWrapper>
              <Button text="확인" onClick={handleConfirmCode}></Button>
            </ButtonWrapper>
        </VerificationWrapper>
      }
      <Input
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        placeholder="닉네임"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        disabled={isVerified}
        placeholder="아이디"
        readOnly
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <Input
  type="password"
  name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
  placeholder="비밀번호 확인"
/>
      <ButtonWrapper>
        <Button text="회원가입" onClick={handleSubmit}></Button>
      </ButtonWrapper>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 20px;
  margin: 6px 0;
  font-size: 16px;
`;

const VerificationInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 20px;
  margin: 6px 0;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const VerificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 1;
`

export default SignUp;
