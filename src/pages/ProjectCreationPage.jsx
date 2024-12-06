import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import WhiteButton from "../components/WhiteButton";
import NavigationBar from "../components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjectName,
  setPlatform,
  setImage,
  addMember,
  updateMember,
  removeMember,
  setDescription,
  setTechnologies,
  resetProject,
} from "../store/projectSlice";

const ProjectCreationPage = () => {
  const {
    projectName,
    platform,
    image,
    members,
    description,
    technologies,
  } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리보기 상태

  // 이미지 업로드 핸들러
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        dispatch(setImage(reader.result)); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleMemberCountChange = (index, value) => {
    if (value >= 0) {
      dispatch(
        updateMember({
          index,
          member: { ...members[index], count: value },
        })
      );
    }
  };

  const handleSubmit = () => {
    const projectData = {
      projectName,
      platform,
      image,
      members,
      description,
      technologies,
    };
    console.log(projectData); // 서버로 보내는 로직 추가
    dispatch(resetProject());
  };

  useEffect(() => {
    if (members.length === 0) {
      dispatch(addMember({ role: "", count: 1 })); 
    }
  }, [dispatch, members.length]);

  return (
    <>
      <NavigationBar />
      <Container>
        <Title>프로젝트 모집 글 작성</Title>
        <br />
        <Label>
          프로젝트명
          <Input
            type="text"
            value={projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
            placeholder="프로젝트명"
          />
        </Label>

        <Label>
          출시 플랫폼
          <Select
            value={platform}
            onChange={(e) => dispatch(setPlatform(e.target.value))}
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
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
              />
              <label htmlFor="image-upload">이미지 업로드</label>
            </UploadButton>
          </ImageWrapper>
        </Label>

        <Label>모집 인원
        {members.map((member, index) => (
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
            <WhiteButton
              text="삭제"
              onClick={() => dispatch(removeMember(index))}
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
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            placeholder="프로젝트 소개"
          />
        </Label>

        <Label>
          기술/언어
          <Input
            type="text"
            value={technologies}
            onChange={(e) => dispatch(setTechnologies(e.target.value))}
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

  label {
    cursor: pointer;
    background-color: white;
    color: blue;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid blue;
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
