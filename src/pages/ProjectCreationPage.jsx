import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjectData,
  resetProject,
  addMember,
  updateMember,
  removeMember,
} from "../store/projectSlice";

const ProjectCreationPage = () => {
  const projectState = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState(projectState.image); // 이미지 미리보기 상태

  // 입력 핸들러 (한 번에 모든 필드 업데이트 가능)
  const handleInputChange = (field, value) => {
    dispatch(setProjectData({ ...projectState, [field]: value }));
  };

  // 이미지 업로드 핸들러
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

  // 멤버 인원수 변경 핸들러
  const handleMemberCountChange = (index, value) => {
    if (value >= 0) {
      dispatch(
        updateMember({
          index,
          member: { ...projectState.members[index], count: value },
        })
      );
    }
  };

  // 제출 핸들러
  const handleSubmit = () => {
    console.log(projectState); // 서버로 보내는 로직 추가
    dispatch(resetProject());
    setImagePreview(null);
  };

  useEffect(() => {
    if (projectState.members.length === 0) {
      dispatch(addMember({ role: "", count: 1 }));
    }
  }, [dispatch, projectState.members.length]);

  return (
    <>
      <Container>
        <Title>프로젝트 모집 글 작성</Title>
        <br />
        <Label>
          프로젝트명
          <Input
            type="text"
            value={projectState.projectName}
            onChange={(e) => handleInputChange("projectName", e.target.value)}
            placeholder="프로젝트명"
          />
        </Label>

        <Label>
          출시 플랫폼
          <Select
            value={projectState.platform}
            onChange={(e) => handleInputChange("platform", e.target.value)}
          >
            <option value="" disabled>
              출시 플랫폼을 선택하세요
            </option>
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
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
              <button>
                <label htmlFor="image-upload">이미지 업로드</label>
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
              />
            </UploadButton>
          </ImageWrapper>
        </Label>


        <Label>모집 인원
          {projectState.members.map((member, index) => (
            <MemberWrapper key={index}>
              <Input
                type="text"
                value={member.role}
                onChange={(e) =>
                  dispatch(
                    updateMember({
                      index,
                      member: { ...member, role: e.target.value },
                    })
                  )
                }
                placeholder="역할 (예: Frontend)"
              />
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
            value={projectState.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="프로젝트 소개"
          />
        </Label>

        <Label>
          기술/언어
          <Input
            type="text"
            value={projectState.technologies}
            onChange={(e) => handleInputChange("technologies", e.target.value)}
            placeholder="사용 기술/언어"
          />
        </Label>

        <ButtonWrapper>
          <Button text="제출" onClick={handleSubmit} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

// 스타일 정의는 그대로 유지
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
`;

const ImagePreview = styled.img`
  width: 300px;
  height: 190px;
  margin: 8px 0;
  border-radius: 10px;
  object-fit: cover;
  background-color: lightgray; 
`;

const UploadButton = styled.div`
  margin-left: 20px;

  button {
    cursor: pointer;
    background-color: white;
    color: ${(props) => props.theme.colors.accent};
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.colors.accent};
  }

  input[type="file"] {
    display: none;
  }
`;


const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default ProjectCreationPage;
