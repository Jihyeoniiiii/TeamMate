import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TagInput from "../components/TagInputContainer";
import ImageUpload from "../components/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  setCommunityData,
  resetCommunity
} from "../store/communitySlice";

const CommunityCreationPage = () => {
  const communityState = useSelector((state) => state.community);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [tags, setTags] = useState(
    communityState.tags || []
  );
  const [imagePreview, setImagePreview] = useState(communityState.image); // 이미지 미리보기 상태

  // 입력 핸들러 (한 번에 모든 필드 업데이트 가능)
  const handleInputChange = (field, value) => {
    dispatch(setCommunityData({ ...communityState, [field]: value }));
  };

  const handleImageChange = (newImage) => {
    handleInputChange("image", newImage);
  };

  const validateFields = () => {
    const newErrors = {};
    if (!communityState.title) newErrors.title = "타이틀을 입력해주세요.";
    if (!communityState.body) newErrors.body = "내용을 입력해주세요.";
    if (tags.length === 0) newErrors.tags = "태그를 작성해주세요."; // tags.length로 확인
    setErrors(newErrors);
  
    // 에러가 없으면 true 반환
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = () => {
    if (validateFields()) {
      console.log(communityState);
      dispatch(resetCommunity());
      setImagePreview("");
      alert("성공적으로 제출되었습니다.");
    } else {
      alert("모든 필수 입력 항목을 작성해주세요.");
    }
  };

  return (
    <>
      <div className="creationContainer"> 
        <Title>커뮤니티 게시글 작성</Title>
        <br />
        <Label>
          제목
          <Input
            type="text"
            value={communityState.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="제목"
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
        </Label>

        <Label>
            내용
          <TextArea
            value={communityState.body}
            onChange={(e) => handleInputChange("body", e.target.value)}
            placeholder="내용"
          />
          {errors.body && <ErrorText>{errors.body}</ErrorText>}
        </Label>

        <Label>
            이미지
          <ImageUpload
            initialImage={communityState.image}
            onImageChange={handleImageChange}
          />
          {errors.image && <ErrorText>{errors.image}</ErrorText>}
        </Label>

        <Label>
            태그
          <TagInput
            tags={tags}
            setTags={(tags) => {
              setTags(tags); 
              handleInputChange("tags", tags);  // 배열을 그대로 전달
            }}
            placeholder="사용 기술/언어 입력 후 Enter"
          />
          {errors.tags && <ErrorText>{errors.tags}</ErrorText>}
        </Label>

        <ButtonWrapper>
          <Button text="제출" onClick={handleSubmit} />
        </ButtonWrapper>
      </div>
    </>
  );
};

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


export default CommunityCreationPage;
