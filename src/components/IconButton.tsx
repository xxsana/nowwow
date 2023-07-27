import styled from "@emotion/styled"
import React from "react"

type Props = {
  size?: number
  children: React.ReactNode
  onClick?: () => void
}

const IconButton = ({ size = 20, children, onClick }: Props) => {
  return (
    <StyledWrapper size={size} onClick={onClick}>
      {children}
    </StyledWrapper>
  )
}

export default IconButton

const StyledWrapper = styled.a<{ size: number }>`
  border-radius: 50%;
  padding: 10px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }
  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    color: ${({ theme }) => theme.colors.gray12};
  }
`
