import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import { roboto } from "src/assets"

const Logo = () => {
  return (
    <StyledWrapper
      href="/"
      aria-label={CONFIG.blog.title}
      className={roboto.className}
    >
      {CONFIG.blog.title}.
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 28px;
  font-weight: 600;
  font-style: italic;
`
