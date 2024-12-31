import styled from "styled-components";
import PostCard from "../components/PostCard";
import ListHeader from "../components/ListHeader";
import PageNavigator from "../components/PageNavigator";
import { useNavigate } from "react-router-dom";
import { CommunityData } from "../data/PostData";

const CommunityList = () => {
  const nav = useNavigate();

  return (
    <>
      <ListHeader type="커뮤니티" />
      <Container>
        <GridWrapper>
          {Array.from({ length: 8 }, (_, index) => (
            <PostCard key={index} data={CommunityData} type="커뮤니티" onClick={() => nav('/community-detail')}/>
          ))}
        </GridWrapper>
      </Container>
      <PageNavigator />
    </>
  );
};

const Container = styled.div`
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

export default CommunityList;
