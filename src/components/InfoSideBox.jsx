import styled from "styled-components";

const InfoSideBox = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
`;

export default InfoSideBox;
