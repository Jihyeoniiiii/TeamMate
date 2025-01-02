import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import UserProfile from "../components/UserProfile";
import InfoSideBox from "../components/InfoSideBox";
import TagList from "../components/TagList";
import SaveButton from "../components/SaveButton";

const mockCommunityData = {
  id: 1,
  title: "스케줄링, dag removed 원인 질문입니다.",
  userImage: "src/assets/images/user.png",
  userName: "iboyeon0816",
  createdAt: "2024-05-20",
  body:
    "데일리 스케줄일 때 금년 11월을 돌린다고 가정하면 기간은 2024/11/01~2024/11/30일입니다. start_date=20241101, end_date=20241130으로 설정하였고, dag를 11/17일에 실행한다고 했을 때, 11/1일부터 17일까지 다 돌면 11/18~11/30일까지는 날짜가 바뀌면 알아서 schedule_interval(매일 1시 등)에 따라 자동으로 task가 실행됐음 좋겠는데 현재 재가 테스트 해본 dag에서는 17일까지만 돌고, 11/18일이 되어도 task가 자동으로 실행이 안되네요. 11/19일이 되어도 18일날짜부터 중지되어있습니다.비슷하게 검색했을 땐 catchup을 변경하는 방법이 있는것 같은데 이건 과거 날짜일 경우에만 해당하는 것으로 보입니다. (참고로 위 dag에선 catchup=True로 했습니다만 18일은 안돌아갑니다) 저처럼 미래 날짜도 자동화하고 싶을 때 config설정 변경 등 혹시 방법이 있을까요?",
  images: [
    "src/assets/images/image1.png",
    "src/assets/images/image2.png",
    "src/assets/images/image3.png",
  ],
  tags: ["React", "Node.js", "TensorFlow"],
  comments: [
    { id: 1, userImg: "src/assets/images/user.png", userName: "john_doe", text: "좋은 질문이네요!" },
    { id: 2, userImg: "src/assets/images/user.png", userName: "jane_smith", text: "이 문제에 대해 저도 고민 중입니다." },
  ],
};

const CommunityDetailPage = () => {
  const {
    title,
    body,
    userImage,
    userName,
    createdAt,
    images,
    tags,
    comments
  } = mockCommunityData;

  return (
    <>
      <Container>
        <ContentWrapper>
          <MainContent>
            <HeaderSection status="미해결" title={title} date={createdAt} type="커뮤니티" />
            <Description>{body}</Description>

            <ImagesWrapper>
              {images.map((image, index) => (
                <Image key={index} src={image} alt={`image-${index}`} />
              ))}
            </ImagesWrapper>
            <ButtonWrapper>
              <SaveButton />
            </ButtonWrapper>

            <Divider />

            <CommentsSection>
              <CommentsTitle>
                답변 <span>{comments.length}</span>
              </CommentsTitle>
              {comments.map((comment) => (
                <Comment key={comment.id}>
                  <UserProfile
                    userImg={comment.userImg}
                    description={comment.userName}
                    textColor="#333"
                    fontSize="14px"
                    fontWeight="500"
                  />
                  <CommentText>{comment.text}</CommentText>
                </Comment>
              ))}
            </CommentsSection>

          </MainContent>

          <SideContent>
            <InfoSideBox>
              <Section>
                <h3>질문자</h3>
                <UserProfile
                  userImg={userImage}
                  description={userName}
                  textColor="#333"
                  fontSize="16px"
                  fontWeight="350"
                />
              </Section>
              <Divider />

              <Section>
                <h3>태그</h3>
                <TagList Tags={tags} />
              </Section>
            </InfoSideBox>
          </SideContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 5px 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const MainContent = styled.div`
  flex: 3;
  padding: 40px;

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-line;
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  background-color: lightgray;
`;

const SideContent = styled.div`
  flex: 1;
  padding: 40px;
`;

const Section = styled.div`
  margin-bottom: 15px;

  h3 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;

const CommentsSection = styled.div`
  margin-top: 20px;
`;

const CommentsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;

  span {
    color: ${(props) => props.theme.colors.primary}; 
    font-weight: bold;
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding-bottom: 15px;

`;

const CommentText = styled.p`
  font-size: 14px;
  margin: 5px 0 0 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  margin-top: 20px; /* 사진 아래에 적절한 간격 추가 */
`;



export default CommunityDetailPage;
