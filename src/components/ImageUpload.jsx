// ImageUpload.js
import { useState } from "react";
import styled from "styled-components";

const ImageUpload = ({ initialImage, onImageChange }) => {
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

  return (
    <ImageWrapper>
      <ImagePreview src={imagePreview || "src/assets/icon/defaultImg.png"} alt="미리보기" />
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

export default ImageUpload;
