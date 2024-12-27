import styled from "styled-components";
import Button from "./Button";
import Search from "../assets/icon/Search.svg";
import Dropdown from "../assets/icon/Dropdown.svg";

const ListHeader = () => {
  return (
    <Container>
      <Title>전체 프로젝트</Title>
      <SearchContainer>
        <SearchField>
          <DropdownButton>
            직군
            <img src={Dropdown} width={10} height={10} />
          </DropdownButton>
          <DropdownButton>
            기술스택
            <img src={Dropdown} width={10} height={10} />
          </DropdownButton>
          <SearchInput placeholder="검색어 입력"/>
          <CheckRecruitBox type="checkbox" />
          <CheckRecruitLabel>모집중</CheckRecruitLabel>
          <SearchIconWrapper>
            <img src={Search} alt="Search" width={18} height={18}/>
          </SearchIconWrapper>
        </SearchField>
        <Button text="프로젝트 모집 글 작성하기" />
      </SearchContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 75px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 20px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;

  Button {
    max-width: 200px;
  }
`;

const SearchField = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 20px;
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 5px 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkgrey};
  white-space: nowrap;
  border-radius: 3px;
  margin-right: 5px;
  min-width: 100px;
`;

const SearchInput = styled.input`
  width: 300px;
  font-size: 14px;
  white-space: nowrap;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 0 10px;

  ::placeholder {
    color: ${(props) => props.theme.colors.darkgrey};
  }
`

const CheckRecruitBox = styled.input`
    margin: 8px;
`

const CheckRecruitLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.theme.colors.darkgrey};
    padding-top: 2px;
`

const SearchIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top: 2px;
`

export default ListHeader;
