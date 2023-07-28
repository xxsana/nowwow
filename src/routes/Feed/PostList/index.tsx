import { useRouter } from "next/router"
import React, { Fragment, useEffect, useState } from "react"
import PostCard from "src/routes/Feed/PostList/PostCard"
import usePostsQuery from "src/hooks/usePostsQuery"
import styled from "@emotion/styled"
import { filterPosts } from "src/libs/utils/notion"

type Props = {
  q: string
}

const PostList: React.FC<Props> = ({ q }) => {
  const router = useRouter()
  const data = filterPosts(usePostsQuery())
  const [filteredPosts, setFilteredPosts] = useState(data)

  const currentTag = `${router.query.tag || ``}` || undefined

  useEffect(() => {
    setFilteredPosts(() => {
      let newFilteredPosts = data

      // tag
      if (currentTag) {
        newFilteredPosts = newFilteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }

      return newFilteredPosts
    })
  }, [currentTag])

  return (
    <>
      <StyledWrapper className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {filteredPosts.map((post, idx) => (
          <Fragment key={post.id}>
            <PostCard data={post} />
            {/* {idx !== filteredPosts.length - 1 && <hr />} */}
          </Fragment>
        ))}
      </StyledWrapper>
    </>
  )
}

export default PostList

const StyledWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;
  hr {
    margin: 24px 0;
  }
`
