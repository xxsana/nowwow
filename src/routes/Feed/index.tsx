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

type Props = {}

const Feed: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="lt"></div>
      <div className="rt">
        <div className="profileSection">
          <div className="lt">
            <Image src={CONFIG.profile.image} fill alt="" />
          </div>
          <div className="rt">
            <div className="name">{CONFIG.profile.name}</div>
            <div className="bio">{CONFIG.profile.bio}</div>
            {/* follow, follower */}
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
        </div>
        <hr />
        <TagList />
        {/* <FeedHeader /> */}
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
  max-width: ${({ theme }) => theme.variables.widthSm}px;
  width: 100%;
  margin: 0 auto;

  .profileSection {
    display: flex;
    align-items: center;
    gap: 24px;
    .lt {
      position: relative;
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray4};
    }
    > .rt {
      .name {
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
      }
      .bio {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: ${({ theme }) => theme.colors.gray10};
      }
      .infoList {
        margin-top: 8px;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.gray11};
        display: flex;
        align-items: center;
        gap: 16px;
        height: 15px;
        .infoItem {
          display: flex;
          align-items: center;
          svg {
            font-size: 16px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  hr {
    margin: 24px 0;
  }

  > .footer {
    padding-bottom: 2rem;
  }
`
