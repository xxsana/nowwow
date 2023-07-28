import Footer from "./Footer"
import styled from "@emotion/styled"
import PostList from "./PostList"
import { variables } from "src/styles"
import usePostsQuery from "src/hooks/usePostsQuery"
import usePostQuery from "src/hooks/usePostQuery"
import TagList from "./TagList"
import ProfileSection2 from "./ProfileSection2"

type Props = {}

const Feed: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="profile">
        <ProfileSection2 />
      </div>
      <TagList />
      <PostList q={""} />
      <Footer />
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  padding: 48px ${variables.paddingLg}px;
  max-width: ${({ theme }) => theme.variables.widthSm}px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 36px;

  .profile {
    display: flex;
    .lt {
      position: relative;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray3};
      overflow: hidden;
      width: 180px;
      height: 180px;
    }
  }
`
