import Feed from "src/routes/Feed"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout, PostDetail, TPost } from "../types"
import { getPosts, getRecordMap } from "../apis"
import MetaConfig from "src/components/MetaConfig"
import { queryClient } from "src/libs/react-query"
import { queryKey } from "src/constants/queryKey"
import { GetStaticProps } from "next"
import { dehydrate } from "@tanstack/react-query"
import { filterPosts } from "src/libs/utils/notion"
import { FilterPostsOptions } from "src/libs/utils/notion/filterPosts"

const filter: FilterPostsOptions = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = "about"
  let posts = queryClient.getQueryData<TPost[]>(queryKey.posts())
  let postDetail = queryClient.getQueryData<PostDetail>(
    queryKey.post(`${slug}`)
  )

  if (!posts || process.env.NODE_ENV === "production") {
    posts = await getPosts()
  }

  if (!postDetail || process.env.NODE_ENV === "production") {
    const detailPosts = filterPosts(posts, filter)
    const post = detailPosts.find((t: any) => t.slug === slug)
    const recordMap = await getRecordMap(post?.id!)
    if (post) {
      postDetail = {
        ...post,
        recordMap,
      }
    }
  }

  await queryClient.prefetchQuery(queryKey.posts(), () => posts || [])
  await queryClient.prefetchQuery(queryKey.post(`${slug}`), () => postDetail)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  }
}

const FeedPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Feed />
    </>
  )
}

export default FeedPage
