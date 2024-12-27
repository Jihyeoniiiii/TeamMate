import styled from "styled-components"
import SmallHeart from "../assets/icon/SmallHeart.svg"
import DefaultImage from "../assets/images/default-image.jpg"
import Heart from "../assets/icon/Heart.svg"
import SmallSpeechBubble from "../assets/icon/SmallSpeechBubble.svg"

const PostCard = ({ data, type }) => {
  return (
    <CardWrapper>
        <ImageWrapper>
            <img src={DefaultImage} alt="Default" width={330} height={165} />
            <StateLabel>{data.state}</StateLabel>   
            <HeartIcon src={Heart} alt="Heart" />
        </ImageWrapper>
        <TitleSection type={type}>
            <Title>{data.title}</Title>
            <Description>{data.description}</Description>
            <Description>{data.tag}</Description>
            <CommentSection>
              <Description><img src={SmallHeart} width={12} height={12} /> 3</Description>
              { type === "커뮤니티" && (
                <Description><img src={SmallSpeechBubble} width={12} height={11} className="speech" /> 10</Description>
              )}
            </CommentSection>
        </TitleSection>
        {type === "프로젝트" && (
        <>
          <Line />
          <RecruitSection>
            <Description>모집완료 0/3</Description>
          </RecruitSection>
        </>
      )}
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    border: 1px solid ${(props) => props.theme.colors.lightgrey};
    border-radius: 15px;
    overflow: hidden;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 165px;
`;

const StateLabel = styled.div`
    position: absolute;
    top: 17px;
    left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 5px;
    color: white;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    font-size: 11px;
`

const HeartIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
`;

const TitleSection = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 10px 20px;
    gap: 5px;
    margin-bottom: ${(props) => (props.type === "커뮤니티" ? "20px" : "0px")};
`

const RecruitSection = styled.div`
    width: 100%;
    height: 30px;
    padding-bottom: 10px;
    padding-left: 20px;
`

const Title = styled.div`
    font-size: 17px;
    font-weight: 400;
`

const Description = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.darkgrey};
`

const CommentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.lightgrey};
  margin-bottom: 10px;
`;

export default PostCard