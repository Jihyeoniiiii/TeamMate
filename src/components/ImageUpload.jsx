import { useState } from "react";
import styled from "styled-components";
// 이미지 import
import defaultResumeImage from "../assets/icon/default_3_4_ratio_high_quality.png";
import defaultGeneralImage from "../assets/icon/defaultImg.png";

const ImageUpload = ({ initialImage, onImageChange, type }) => {
  const [imagePreview, setImagePreview] = useState(initialImage || "");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 기본 이미지 설정
  const defaultImage = type === "resume" ? defaultResumeImage : defaultGeneralImage;

  return (
    <ImageWrapper>
      <ImagePreview
        src={imagePreview || defaultImage} // 이미지 미리보기 또는 기본 이미지
        alt="미리보기"
        type={type}
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
  );
};

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImagePreview = styled.img`
  width: ${(props) => (props.type === "resume" ? "150px" : "300px")}; /* 기본은 300px, 이력서는 150px */
  height: ${(props) => (props.type === "resume" ? "200px" : "190px")}; /* 기본은 190px, 이력서는 200px */
  margin: 8px 0;
  border-radius: ${(props) => (props.type === "resume" ? "5px" : "10px")}; /* 이력서는 둥글기 감소 */
  object-fit: cover; /* 비율 유지하며 이미지 채움 */
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

export default ImageUpload;