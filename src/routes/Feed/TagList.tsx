import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      {Object.keys(data).map((key) => (
        <a
          key={key}
          data-active={key === currentTag}
          onClick={() => handleClickTag(key)}
        >
          {key}
        </a>
      ))}
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  display: flex;
  gap: 12px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  a {
    display: block;
    flex-shrink: 0;

    padding: 6px 14px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray4};
    }
    &[data-active="true"] {
      color: ${({ theme }) => theme.colors.blue11};
      background-color: ${({ theme }) => theme.colors.blue4};
      font-weight: 600;
    }
  }
`
