import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../store/resumeSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import TagInput from "../components/TagInputContainer";
import Button from "../components/Button";

const PortfolioCreationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        skills: [], // skills 초기값을 빈 배열로 설정
        member: "",
        stack: "",
        startDate: "",
        endDate: "",
        period: "",
        service: "",
        image: "",
        images: [],
        introduction: "",
        improve: "",
        awards: "",
    });

    const handleChange = (name, value) => {
        setProjectData((prevData) => {
            const updatedData = { ...prevData, [name]: value };

            // startDate와 endDate를 조합하여 period 생성
            if (name === "startDate" || name === "endDate") {
                updatedData.period = `${updatedData.startDate} ~ ${updatedData.endDate}`;
            }

            return updatedData;
        });
    };


    const handleImageChange = (newImage) => {
        handleChange("image", newImage);
    };

    const handleImagesChange = (newImages) => {
        handleChange("images", newImages);
    };
    const handleSubmit = () => {
        dispatch(addProject(projectData)); // Redux에 프로젝트 데이터 추가
        navigate(-1); // 이전 페이지로 이동
    };

    return (
        <div className="creationContainer">
            <Title>포트폴리오 작성</Title>
            <Label>
                제목
                <Input
                    type="text"
                    name="title"
                    value={projectData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="제목"
                />
            </Label>

            <Label>
                한줄 소개
                <Input
                    type="text"
                    name="description"
                    value={projectData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="한줄 소개"
                />
            </Label>

            <Label>
                대표이미지
                <ImageUpload
                    initialImage={projectData.image}
                    onImageChange={handleImageChange}
                />
            </Label>

            <Label>
                skills
                <TagInput
                    tags={projectData.skills} // tags prop으로 projectData.skills 전달
                    setTags={(skills) => handleChange("skills", skills)} // skills 배열 업데이트
                    placeholder="사용 기술 입력 후 Enter"
                />
            </Label>

            <Label>
                팀 구성 멤버
                <Input
                    type="text"
                    name="member"
                    value={projectData.member}
                    onChange={(e) => handleChange("member", e.target.value)}
                    placeholder="팀 구성"
                />
            </Label>

            <Label>
                기술 스택
                <Input
                    type="text"
                    name="stack"
                    value={projectData.stack}
                    onChange={(e) => handleChange("stack", e.target.value)}
                    placeholder="기술 스택"
                />
            </Label>

            <Label>
                프로젝트 기간
                <DateWrapper>
                    <Input
                        type="date"
                        value={projectData.startDate}
                        onChange={(e) => handleChange("startDate", e.target.value)}
                    />
                    ~
                    <Input
                        type="date"
                        value={projectData.endDate}
                        onChange={(e) => handleChange("endDate", e.target.value)}
                    />
                </DateWrapper>
            </Label>

            <Label>
                서비스 내용
                <TextArea
                    value={projectData.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    placeholder="서비스 내용"
                />
            </Label>

            <Label>
                서비스 화면
                <ImageUpload
                    initialImage={projectData.images}
                    onImageChange={handleImagesChange}
                />
            </Label>

            <Label>
                개발 내용
                <TextArea
                    value={projectData.introduction}
                    onChange={(e) => handleChange("introduction", e.target.value)}
                    placeholder="개발 내용"
                />
            </Label>

            <Label>
                성장 내용
                <TextArea
                    value={projectData.improve}
                    onChange={(e) => handleChange("improve", e.target.value)}
                    placeholder="성장 내용"
                />
            </Label>

            <Label>
                연관 활동 및 수상 이력
                <TextArea
                    value={projectData.awards}
                    onChange={(e) => handleChange("awards", e.target.value)}
                    placeholder="연관 활동 및 수상 이력"
                />
            </Label>

            <ButtonWrapper>
                <Button text="포트폴리오 생성" onClick={handleSubmit} />
            </ButtonWrapper>
        </div>
    );
};

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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


export default PortfolioCreationPage;