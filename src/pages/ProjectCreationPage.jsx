import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TagInput from "../components/TagInputContainer";
import NavigationBar from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjectData,
  resetProject,
  addMember,
  updateMember,
  removeMember,
} from "../store/projectSlice";

const roles = [
  { id: 1, name: "기획" },
  { id: 2, name: "디자인" },
  { id: 3, name: "프론트엔드 개발" },
  { id: 4, name: "백엔드 개발" },
  { id: 5, name: "안드로이드 개발" },
  { id: 6, name: "IOS 개발" },
  { id: 7, name: "AI" },
  { id: 8, name: "보안" },
];

const ProjectCreationPage = () => {
  const projectState = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [technologies, setTechnologies] = useState(projectState.technology_id_list || []);
  const [imagePreview, setImagePreview] = useState(projectState.image || "");

  const handleInputChange = (field, value) => {
    dispatch(setProjectData({ ...projectState, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        handleInputChange("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMemberCountChange = (index, value) => {
    if (value >= 0) {
      dispatch(
        updateMember({
          index,
          member: { ...projectState.platform_dto_list[index], count: value },
        })
      );
    }
  };

  const handleSubmit = () => {
    console.log(projectState);
    dispatch(resetProject());
    setImagePreview("");
  };

  useEffect(() => {
    const platformList = projectState.platform_dto_list || [];
    if (platformList.length === 0) {
      dispatch(addMember({ role: "", count: 1 }));
    }
  }, [dispatch, projectState.platform_dto_list]);
  
  return (
    <>
      <NavigationBar />
      <Container>
        <Title>프로젝트 모집 글 작성</Title>
        <Label>
          프로젝트명
          <Input
            type="text"
            value={projectState.projectName || ""}
            onChange={(e) => handleInputChange("projectName", e.target.value)}
            placeholder="프로젝트명"
          />
        </Label>

        <Label>
          프로젝트 기간
          <DateWrapper>
            <Input
              type="date"
              value={projectState.startDate || ""}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
            />
            ~
            <Input
              type="date"
              value={projectState.endDate || ""}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
            />
          </DateWrapper>
        </Label>

        <Label>
          출시 플랫폼
          <Select
            value={projectState.platform_id_list || ""}
            onChange={(e) => handleInputChange("platform", e.target.value)}
          >
            <option value="" disabled>
              출시 플랫폼을 선택하세요
            </option>
            <option value="not">미정 (추후 논의)</option>
            <option value="web">반응형 웹(PC/모바일)</option>
            <option value="android">안드로이드 앱</option>
            <option value="ios">IOS 앱</option>
            <option value="desktop">PC 프로그램</option>
          </Select>
        </Label>

        <Label>
          대표 이미지
          <ImageWrapper>
            <ImagePreview
              src={imagePreview || "src/assets/icon/defaultImg.png"}
              alt="미리보기"
            />
            <UploadButton>
              <label htmlFor="image-upload">이미지 업로드</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
              />
            </UploadButton>
          </ImageWrapper>
        </Label>

        <Label>
          모집 인원
            {(projectState.platform_dto_list || []).map((member, index) => (
              <MemberWrapper key={index}>
                <Select
                  value={member.role}
                  onChange={(e) =>
                    dispatch(
                      updateMember({
                        index,
                        member: { ...member, role: e.target.value },
                      })
                    )
                  }
                  style={{
                    color: member.role ? "black" : "gray",
                  }}
                >
                  <option value="" disabled hidden>
                    역할 선택
                  </option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>
                      {role.name}
                    </option>
                  ))}
                </Select>
                <Input
                  type="number"
                  value={member.count}
                  onChange={(e) =>
                    handleMemberCountChange(index, parseInt(e.target.value) || 1)
                  }
                  placeholder="인원수"
                />
                <Button
                  text="삭제"
                  onClick={() => dispatch(removeMember(index))}
                  bgColor="white"
                  textColor={(props) => props.theme.colors.accent}
                />
              </MemberWrapper>
            ))}
            
          <ButtonWrapper>
            <Button
              text="역할 추가"
              onClick={() => dispatch(addMember({ role: "", count: 1 }))}
            />
          </ButtonWrapper>
        </Label>

        <Label>
          프로젝트 소개
          <TextArea
            value={projectState.description || ""}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="프로젝트 소개"
          />
        </Label>

        <Label>
          기술/언어
          <TagInput
            tags={technologies}
            setTags={(tags) => {
              setTechnologies(tags);
              handleInputChange("technologies", tags);
            }}
            placeholder="사용 기술/언어 입력 후 Enter"
          />
        </Label>

        <Label>
          모집 마감일
          <Input
            type="date"
            value={projectState.deadLine || ""}
            onChange={(e) => handleInputChange("deadLine", e.target.value)}
          />
        </Label>

        <ButtonWrapper>
          <Button text="제출" onClick={handleSubmit} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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

const Select = styled.select`
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
  resize: none;
`;

const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImagePreview = styled.img`
  width: 300px;
  height: 190px;
  border-radius: 10px;
  object-fit: cover;
  background-color: lightgray;
`;

const UploadButton = styled.label`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.accent};
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  display: inline-block;

  input[type="file"] {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default ProjectCreationPage;
