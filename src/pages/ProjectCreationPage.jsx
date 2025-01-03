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
  const [errors, setErrors] = useState({});

  const [technologies, setTechnologies] = useState(
    projectState.technology_id_list || []
  );
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
          member: { ...projectState.platform_dto_list[index], count: value },
        })
      );
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!projectState.projectName) newErrors.projectName = "프로젝트명을 입력해주세요.";
    if (!projectState.startDate || !projectState.endDate) newErrors.projectDate = "프로젝트 시작 날짜를 선택해주세요.";
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
    if (!projectState.platform_dto_list || projectState.platform_dto_list.length === 0) {
      dispatch(addMember({ role: "", count: 1 })); // 기본 멤버 추가
    }
  }, [dispatch, projectState.platform_dto_list]);
  


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
          {errors.projectName && <ErrorText>{errors.projectName}</ErrorText>}
        </Label>

        <Label>
          프로젝트 기간
          <DateWrapper>
            <Input
              type="date"
              value={projectState.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
            />
            ~
            <Input
              type="date"
              value={projectState.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
            />
          </DateWrapper>
          {errors.projectDate && <ErrorText>{errors.projectDate}</ErrorText>}
        </Label>

        <Label>
          출시 플랫폼
          <Select
            value={projectState.platform_id_list}
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
          {errors.image && <ErrorText>{errors.image}</ErrorText>}
        </Label>


        <Label>모집 인원
  {(projectState.platform_dto_list || []).map((member, index) => (
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
        placeholder="역할 입력"
        style={{
          color: "black",
        }}
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
          {errors.description && <ErrorText>{errors.description}</ErrorText>}
        </Label>

        <Label>
          기술/언어
          <TagInput
            tags={technologies}  // 배열로 전달
            setTags={(tags) => {
              setTechnologies(tags);  // 내부 상태 업데이트
              handleInputChange("technologies", tags);  // 배열을 그대로 전달
            }}
            placeholder="사용 기술/언어 입력 후 Enter"
          />
          {errors.technologies && <ErrorText>{errors.technologies}</ErrorText>}
        </Label>


        <Label>
          모집 마감일
          <Input
            type="date"
            value={projectState.deadLine}
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
