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
  background-color: ${(props) => props.theme.colors.primary};
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
  color: white;
`;

export default TagList;
