import styled from "styled-components"
import MenuBar from "../components/mypage/MenuBar"
import PostList from "../components/mypage/PostList"
import Profile from "../components/mypage/Profile"
import PageNavigator from "../components/PageNavigator"

const MyPage = () => {
  return (
    <>
     <Profile />
     <MainContenet>
      <MenuBar />
      <PostList />   
     </MainContenet>
     <PageNavigator />
    </>
  )
}

const MainContenet = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 50px;
`

export default MyPage