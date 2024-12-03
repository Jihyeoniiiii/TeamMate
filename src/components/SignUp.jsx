import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setSchool, setNickname } from "../store/authSlice";

const SignUp = () => {
  const { email, password, school, nickname } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleSchoolChange = (e) => {
    dispatch(setSchool(e.target.value));
  };

  const handleNicknameChange = (e) => {
    dispatch(setNickname(e.target.value));
  }

  const handleIdChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleVerification = () => {
    if (!email || !school) {
      alert("모든 입력값을 채워주세요!");
      return;
    } else {
      setIsInputVisible(true);
    }
  }

  const handleSubmit = () => {
    if (!email || !password || !nickname || !confirmPassword) {
      alert("모든 입력값을 채워주세요!");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    console.log(email, password, school, nickname); // 입력값을 백엔드로 전송
  };

  return (
    <>
      <Input
        type="email"
        value={email}
        onChange={handleIdChange}
        placeholder="학교 이메일"
      />
      <Input
        type="text"
        value={school}
        onChange={handleSchoolChange}
        placeholder="학교명"
      />
      <ButtonWrapper>
        <Button text="인증하기" onClick={handleVerification}></Button>
      </ButtonWrapper>
      {isInputVisible &&
        <VerificationWrapper>
            <VerificationInput
              type="text"
              placeholder="인증코드"
            />
            <ButtonWrapper>
              <Button text="확인"></Button>
            </ButtonWrapper>
        </VerificationWrapper>
      }
      <Input
        type="text"
        value={nickname}
        onChange={handleNicknameChange}
        placeholder="닉네임"
      />
      <Input
        type="email"
        value={email}
        placeholder="아이디"
        readOnly
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
      />
      <Input
        type="password"
        onChange={handleConfirmPassword}
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
