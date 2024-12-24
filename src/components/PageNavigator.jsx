import styled from "styled-components"
import { useState } from "react";

const PageNavigator = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 6;

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

  return (
    <Container>
        {Array.from({ length: totalPages }, (_, index) => index+1).map((page) => (
            <PageButton
                key={page}
                isActive={page === currentPage}
                onClick={() => handlePageClick(page)}
            >
                {page}
            </PageButton>
        ))}
        <NavButton>{">"}</NavButton>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
    gap: 5px;
`

const PageButton = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "white"};
  color: ${({ isActive, theme }) =>
    isActive ? "white" : theme.colors.primary};
    cursor: pointer;
`

const NavButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export default PageNavigator