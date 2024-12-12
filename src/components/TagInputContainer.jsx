import React, { useState } from "react";
import styled from "styled-components";

const TagInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  padding: 8px;
  border-radius: 10px;
`;

const Tag = styled.div`
  background-color: #F6F6F6;
  padding: 4px 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
    margin-left: 5px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;

const TagInput = ({ tags, setTags, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (e) => {
    if ((e.key === "Enter" || e.type === "click") && inputValue.trim() !== "") {
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue(""); // Clear the input field
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <TagInputContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>
          {tag} <span onClick={() => removeTag(index)}>  x</span>
        </Tag>
      ))}
      <Input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTag}
      />
    </TagInputContainer>
  );
};

export default TagInput;
