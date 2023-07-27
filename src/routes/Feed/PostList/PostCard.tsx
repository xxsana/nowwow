import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"
import Image from "next/image"
import Category from "../../../components/Category"
import styled from "@emotion/styled"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <StyledWrapper href={`/${data.slug}`}>
      <article>
        <div className="lt">
          {category && (
            <div className="category">
              <Category>{category}</Category>
            </div>
          )}
          <div className="title">{data.title}</div>
          <div className="date">
            <div className="content">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="tags">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
        {data.thumbnail && (
          <div className="rt">
            <Image
              src={data.thumbnail}
              width={180}
              height={180}
              alt={data.title}
              css={{ objectFit: "cover" }}
            />
          </div>
        )}
      </article>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled(Link)`
  article {
    display: flex;
    justify-content: space-between;
    > .lt {
      > .category {
      }
      > .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 500;

        cursor: pointer;
      }
      > .date {
        display: flex;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        .content {
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.gray10};
        }
      }
      > .summary {
        margin-bottom: 1rem;
        p {
          line-height: 2rem;
          color: ${({ theme }) => theme.colors.gray11};
        }
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
      }
    }
    > .rt {
      border-radius: 12px;
      overflow: hidden;
    }
  }
`
