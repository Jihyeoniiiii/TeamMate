import styled from "styled-components";

const TagList = ({ Tags }) => {
  return (
    <Wrapper>
      {Tags.map((tech, index) => (
        <Item key={index}>{tech}</Item>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
  color: #333;
`;

export default TagList;
