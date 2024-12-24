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

const ProjectCreationPage = () => {
  const projectState = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [technologies, setTechnologies] = useState(projectState.technology_id_list || []);
  const [imagePreview, setImagePreview] = useState(projectState.image || "");
  const [errors, setErrors] = useState({});

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

  const validateFields = () => {
    const newErrors = {};
    if (!projectState.projectName) newErrors.projectName = "프로젝트명을 입력해주세요.";
    if (!projectState.startDate) newErrors.startDate = "프로젝트 시작 날짜를 선택해주세요.";
    if (!projectState.endDate) newErrors.endDate = "프로젝트 종료 날짜를 선택해주세요.";
    if (!projectState.platform_id_list) newErrors.platform = "출시 플랫폼을 선택해주세요.";
    if (!projectState.image) newErrors.image = "대표 이미지를 업로드해주세요.";
    if (!projectState.description) newErrors.description = "프로젝트 소개를 작성해주세요.";
    if (!projectState.deadLine) newErrors.deadLine = "모집 마감일을 선택해주세요.";
    if (!technologies.length) newErrors.technologies = "기술/언어를 최소 하나 입력해주세요.";
    setErrors(newErrors);

    // 에러가 없으면 true 반환
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log(projectState);
      dispatch(resetProject());
      setImagePreview("");
      alert("프로젝트가 성공적으로 제출되었습니다.");
    } else {
      alert("모든 필수 입력 항목을 작성해주세요.");
    }
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
          {errors.projectName && <ErrorText>{errors.projectName}</ErrorText>}
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
          {errors.startDate && <ErrorText>{errors.startDate}</ErrorText>}
          {errors.endDate && <ErrorText>{errors.endDate}</ErrorText>}
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
          {errors.platform && <ErrorText>{errors.platform}</ErrorText>}
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
          {errors.image && <ErrorText>{errors.image}</ErrorText>}
        </Label>

        <Label>
          프로젝트 소개
          <TextArea
            value={projectState.description || ""}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="프로젝트 소개"
          />
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
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
          {errors.technologies && <ErrorText>{errors.technologies}</ErrorText>}
        </Label>

        <Label>
          모집 마감일
          <Input
            type="date"
            value={projectState.deadLine || ""}
            onChange={(e) => handleInputChange("deadLine", e.target.value)}
          />
          {errors.deadLine && <ErrorText>{errors.deadLine}</ErrorText>}
        </Label>

        <ButtonWrapper>
          <Button text="제출" onClick={handleSubmit} />
        </ButtonWrapper>
      </Container>
    </>
  );
};

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 0 0;
`;

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
