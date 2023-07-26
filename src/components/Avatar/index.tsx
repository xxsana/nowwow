import React, { forwardRef } from "react"
import { CgUserlane } from "react-icons/cg"
import styled from "@emotion/styled"
import { colors, respondMobile } from "../../styles"
import { css } from "@emotion/react"

type Props = {
  type?: "user" | "group"
  size?: number
  src?: string
}

const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ type = "user", size = 42, src, ...props }, ref) => {
    return (
      <StyledWrapper
        ref={ref}
        css={css`
          width: ${size}px;
          height: ${size}px;
          border-radius: ${type === "group" ? 4 : "50%"};
        `}
        {...props}
      >
        {src ? <img src={src} /> : <CgUserlane />}
      </StyledWrapper>
    )
  }
)

Avatar.displayName = "Avatar"

export { Avatar }

const StyledWrapper = styled.div`
  position: relative;
  background-color: ${colors.dark.gray5};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  svg {
    color: ${colors.light.gray1};
    width: 14px;
    height: 14px;
  }
`
