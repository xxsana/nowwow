import Image from "next/image"
import { CONFIG } from "site.config"
import { MdMail } from "react-icons/md"
import { FaGithub, FaLinkedin, FaTwitter, FaLink } from "react-icons/fa"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Link from "next/link"
import styled from "@emotion/styled"

type Props = {}

const ProfileSection = (props: Props) => {
  return (
    <StyledWrapper>
      <AspectRatio ratio={1}>
        <Image className="profileImg" src={CONFIG.profile.image} fill alt="" />
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
    </StyledWrapper>
  )
}

export default ProfileSection

const StyledWrapper = styled.section`
  .profileImg {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray3};
  }
  > .top {
    padding: 14px 0;
    .name {
      font-size: 26px;
      font-weight: 600;
    }
    .role {
      font-size: 16px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray9};
    }
  }
  > .bio {
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray11};
  }

  > .links {
    margin-top: 16px;
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
`
