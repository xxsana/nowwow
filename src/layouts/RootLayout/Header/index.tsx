import IconButton from "src/components/IconButton"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggleButton"
import styled from "@emotion/styled"
import Link from "next/link"
import { MdRssFeed, MdSearch } from "react-icons/md"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <Logo />
        <div className="rt">
          <ThemeToggle />
          <IconButton>
            <MdSearch />
          </IconButton>
          <IconButton>
            <MdRssFeed />
          </IconButton>
          {/* <Link className="link" href="/about">
            About
          </Link> */}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: ${({ theme }) => theme.variables.headerHeight}px;
  z-index: ${({ theme }) => theme.zIndexes.header};
  background-color: ${({ theme }) => theme.colors.gray1};

  .container {
    padding: 0 ${({ theme }) => theme.variables.paddingLg}px;
    max-width: ${({ theme }) => theme.variables.widthMd}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    font-size: 14px;
    .rt {
      display: flex;
      align-items: center;
      gap: 6px;

      .link {
        background-color: ${({ theme }) => theme.colors.gray4};
        padding: 10px 24px;
        border-radius: 8px;
        font-weight: 500;
        opacity: 0.8;
        font-size: 16px;
      }
    }
  }
`
