import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"

const usePostQuery = (slug?: string) => {
  const router = useRouter()

  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug ?? router.query.slug}`),
    enabled: false,
  })

  return data
}

export default usePostQuery
