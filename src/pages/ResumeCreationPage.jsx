import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TagInput from "../components/TagInputContainer";
import ImageUpload from "../components/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TagList from "../components/TagList";


import {
    setResumeData,
    resetResume,
    deleteProject,
    updateProject
} from "../store/resumeSlice";

const ResumeCreationPage = () => {
    const navigate = useNavigate();
    const resumeState = useSelector((state) => state.resume);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const [imagePreview, setImagePreview] = useState(resumeState.image); // 이미지 미리보기 상태

    // 입력 핸들러 (한 번에 모든 필드 업데이트 가능)
    const handleInputChange = (field, value) => {
        dispatch(setResumeData({ ...resumeState, [field]: value }));
    };

    const handleCreatePortfolio = () => {
        navigate("/mypage/resumes/new/1/portfolio-creation");
    };

    const handleImageChange = (newImage) => {
        handleInputChange("image", newImage);
    };

    const validateFields = () => {
        const newErrors = {};
        if (!communityState.name) newErrors.name = "이름을 입력해주세요.";
        if (!communityState.age) newErrors.age = "나이를 입력해주세요.";
        if (!communityState.position) newErrors.position = "포지션을 입력해주세요.";
        if (!communityState.email) newErrors.email = "email을 입력해주세요.";
        if (!communityState.introduction) newErrors.introduction = "자기소개를 입력해주세요.";
        if (!communityState.stacks) newErrors.stacks = "스택을 입력해주세요.";
        if (tags.length === 0) newErrors.tags = "태그를 작성해주세요."; // tags.length로 확인
        setErrors(newErrors);

        // 에러가 없으면 true 반환
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = () => {
        if (validateFields()) {
            console.log(resumeState);
            dispatch(resetResume());
            setImagePreview("");
            alert("성공적으로 제출되었습니다.");
        } else {
            alert("모든 필수 입력 항목을 작성해주세요.");
        }
    };

    return (
        <>
            <div className="creationContainer">
                <Title>이력서 작성</Title>
                <br />
                <Label>
                    이름
                    <Input
                        type="text"
                        value={resumeState.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="이름"
                    />
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                </Label>

                <Label>
                    나이
                    <Input
                        type="text"
                        value={resumeState.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        placeholder="나이"
                    />
                    {errors.age && <ErrorText>{errors.age}</ErrorText>}
                </Label>

                <Label>
                    직무
                    <Input
                        type="text"
                        value={resumeState.position}
                        onChange={(e) => handleInputChange("position", e.target.value)}
                        placeholder="직무"
                    />
                    {errors.position && <ErrorText>{errors.position}</ErrorText>}
                </Label>

                <Label>
                    email
                    <Input
                        type="text"
                        value={resumeState.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="email"
                    />
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </Label>


                <Label>
                    자기소개
                    <TextArea
                        value={resumeState.introduction}
                        onChange={(e) => handleInputChange("introduction", e.target.value)}
                        placeholder="자기소개"
                    />
                    {errors.introduction && <ErrorText>{errors.introduction}</ErrorText>}
                </Label>

                <Label>
                    이미지
                    <ImageUpload
                        type="resume"
                        initialImage={resumeState.image}
                        onImageChange={handleImageChange}
                    />
                    {errors.image && <ErrorText>{errors.image}</ErrorText>}
                </Label>

                <Label>
                    Stack
                    <TextArea
                        value={resumeState.stacks}
                        onChange={(e) => handleInputChange("stack", e.target.value)}
                        placeholder="stack"
                    />
                    {errors.stacks && <ErrorText>{errors.stacks}</ErrorText>}
                </Label>

                <Label>
                    프로젝트

                    <ProjectList>
                        {resumeState.projects.map((project, index) => (
                            <ProjectBox key={index} onClick={(e) => e.stopPropagation()}>
                                <ProjectImage
                                    src={project.image || "/assets/icon/default_3_4_ratio_high_quality.png"}
                                    alt="프로젝트 이미지"
                                />
                                <ProjectContent>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <TagList Tags={project.skills} />
                                    <ProjectPeriod>{project.period}</ProjectPeriod>

                                    <EditButtonWrapper>
                                        <Button
                                            variant="invert"
                                            text="수정"
                                            onClick={(e) => {
                                                e.stopPropagation(); // 부모의 클릭 이벤트 방지
                                                navigate(`/mypage/resumes/new/1/portfolio-edit/${index}`);
                                            }}
                                        />
                                        <Button
                                            variant="invert"
                                            text="삭제"
                                            onClick={(e) => {
                                                e.stopPropagation(); // 이벤트 버블링 방지
                                                dispatch(deleteProject(index)); // Redux 상태에서 삭제
                                            }}
                                        />
                                    </EditButtonWrapper>
                                </ProjectContent>
                            </ProjectBox>
                        ))}
                    </ProjectList>
                    <ProjectButtonWrapper>
                        <Button variant="invert" text="+" onClick={handleCreatePortfolio} />
                    </ProjectButtonWrapper>
                </Label>

                <Label>
                    수상이력
                    <TextArea
                        value={resumeState.awards}
                        onChange={(e) => handleInputChange("awards", e.target.value)}
                        placeholder="수상이력"
                    />
                </Label>

                <ButtonWrapper>
                    <Button text="제출" onClick={handleSubmit} />
                </ButtonWrapper>
            </div>
        </>
    );
};

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 8px 0;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 20px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ProjectPeriod = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey};
  margin: 10px 0 0;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 10px;
  margin: 8px 0;
  font-size: 16px;
`;

const Label = styled.label`
  display: block;
  margin: 30px 0;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 10px;
  margin: 8px 0;
  font-size: 16px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const EditButtonWrapper = styled.div`
  text-align: center;
  display: flex;
  margin-top: 10px;
  width: 120px;
  gap: 10px;
`;

const ProjectButtonWrapper = styled.div`
  text-align: start;
  margin-top: 20px;
  width: 38px;
`;



export default ResumeCreationPage;
