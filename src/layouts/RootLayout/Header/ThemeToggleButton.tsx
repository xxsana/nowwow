import styled from "@emotion/styled"
import React from "react"
import { MdDarkMode, MdWbSunny } from "react-icons/md"
import IconButton from "src/components/IconButton"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggleButton: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <IconButton onClick={handleClick}>
      {scheme === "light" ? <MdWbSunny /> : <MdDarkMode />}
    </IconButton>
  )
}

export default ThemeToggleButton
