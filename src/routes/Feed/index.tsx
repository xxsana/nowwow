import { FeedHeader } from "./FeedHeader"
import Footer from "./Footer"
import styled from "@emotion/styled"
import TagList from "./TagList"
import MobileProfileCard from "./MobileProfileCard"
import PostList from "./PostList"
import { variables } from "src/styles"
import Image from "next/image"
import { CONFIG } from "site.config"
import { MdLink, MdLocationPin, MdMail } from "react-icons/md"
import { FaGithub, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import usePostsQuery from "src/hooks/usePostsQuery"
import Link from "next/link"

type Props = {}

const Feed: React.FC<Props> = () => {
  const posts = usePostsQuery()

  return (
    <StyledWrapper>
      <div className="lt">
        <AspectRatio ratio={1}>
          <Image
            className="profileImg"
            src={CONFIG.profile.image}
            fill
            alt=""
          />
        </AspectRatio>
        <div className="top">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
        </div>
        <div className="bio">{CONFIG.profile.bio}</div>
        <div className="links">
          {CONFIG.profile.email && (
            <Link className="link" href={CONFIG.profile.email}>
              <MdMail />
            </Link>
          )}
          {CONFIG.profile.email && (
            <Link className="link" href={CONFIG.profile.email}>
              <FaGithub />
            </Link>
          )}
          {CONFIG.profile.email && (
            <Link className="link" href={CONFIG.profile.email}>
              <FaLinkedin />
            </Link>
          )}
          {CONFIG.profile.email && (
            <Link className="link" href={CONFIG.profile.email}>
              <FaTwitter />
            </Link>
          )}
          {CONFIG.profile.email && (
            <Link className="link" href={CONFIG.profile.email}>
              <FaLink />
            </Link>
          )}
        </div>
      </div>
      <div className="rt">
        {/* <div className="profileSection">
          <div className="lt">
            <Image src={CONFIG.profile.image} fill alt="" />
          </div>
          <div className="rt">
            <div className="name">{CONFIG.profile.name}</div>
            <div className="bio">{CONFIG.profile.bio}</div>
            <div className="infoList">
              <div className="infoItem">
                <MdLocationPin />
                <div>Seoul, South Korea</div>
              </div>
              <div className="infoItem">
                <MdLink />
                <div>http://untilled.team</div>
              </div>
              <div className="infoItem">
                <MdMail />
                <div>morethanmin@gmail.com</div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <TagList /> */}
        {/* <FeedHeader /> */}
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
  padding: ${variables.paddingLg}px;
  max-width: ${({ theme }) => theme.variables.widthMd}px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(280px, 280px) 1fr;
  gap: 36px;
  > .lt {
    .profileImg {
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray3};
    }
    > .top {
      padding: 16px 0;
      .name {
        font-size: 24px;
        font-weight: 600;
      }
      .role {
        font-size: 18px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray9};
      }
    }
    > .bio {
      font-size: 16px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray11};
    }

    > .links {
      margin-top: 14px;
      display: flex;
      gap: 10px;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .link {
        flex-shrink: 0;
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.gray3};
        color: ${({ theme }) => theme.colors.gray9};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .infoList {
      font-size: 14px;
      padding: 16px 0;
      .infoItem {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        svg {
          font-size: 16px;
          margin-right: 4px;
          color: ${({ theme }) => theme.colors.gray10};
        }
        desc {
          color: ${({ theme }) => theme.colors.gray11};
        }
      }
    }
  }
  > .rt {
    > .header {
      font-size: 24px;
      font-weight: 700;
    }
  }
`
