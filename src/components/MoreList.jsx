import styled from "styled-components";
import MoreListTitle from "../components/MoreListTitle";
import PostCard from "./PostCard";
import Button from "./Button";

const MoreList = ({ data, type }) => {
  return (
    <Wrapper>
      <MoreListTitle type={type} />
      <CardContainer>
        <GridWrapper>
          {Array.from({ length: 4 }, (_, index) => (
            <PostCard key={index} data={data} type={type} />
          ))}
        </GridWrapper>
      </CardContainer>
      <ButtonContainer>
        <Button text="더보기" variant="invert" borderRadius="50px" />
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 35px;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: fit-content;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  Button {
    display: flex;
    width: fit-content;
    padding: 0 30px;
  }
`;

export default MoreList;
