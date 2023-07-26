import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import styled from "@emotion/styled"

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <Logo />
        <div className="nav">
          <ThemeToggle />
          <NavBar />
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
    max-width: ${({ theme }) => theme.variables.widthSm}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100%;
    font-size: 14px;

    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`
