import Footer from "./Footer"
import styled from "@emotion/styled"
import PostList from "./PostList"
import { variables } from "src/styles"
import Image from "next/image"
import { CONFIG } from "site.config"
import { MdMail } from "react-icons/md"
import { FaGithub, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import usePostsQuery from "src/hooks/usePostsQuery"
import Link from "next/link"
import NotionRenderer from "src/components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
import ProfileSection from "./ProfileSection"

type Props = {}

const Feed: React.FC<Props> = () => {
  const posts = usePostsQuery()
  const post = usePostQuery("about")

  return (
    <StyledWrapper>
      <div className="lt">
        <ProfileSection />
        <section className="tags"></section>
        <section className="projects"></section>
      </div>
      <div className="rt">
        {/* <div className="header">Pinned</div> */}
        {post && (
          <section>
            <div className="header">About</div>
            <div className="aboutSection">
              <NotionRenderer recordMap={post?.recordMap} />
            </div>
          </section>
        )}
        <div className="header">1,336 Articles in the last year</div>
        <div className="header">{posts.length} Posts</div>
        <PostList q={""} />
        <Footer />
      </div>
      {/* <ServiceCard />
        <ContactCard /> */}
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  padding: 48px ${variables.paddingLg}px;
  max-width: ${({ theme }) => theme.variables.widthMd}px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(280px, 280px) 1fr;
  gap: 36px;
  > .lt {
    > .tags {
    }
  }
  > .rt {
    display: flex;
    flex-direction: column;
    gap: 24px;
    section {
      display: flex;
      flex-direction: column;
      gap: 24px;
      > .header {
        font-size: 18px;
      }
      > .aboutSection {
        border-radius: 12px;
        padding: 24px;
        border: 1px solid ${({ theme }) => theme.colors.gray6};
      }
    }
  }
`
