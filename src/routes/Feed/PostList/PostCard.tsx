import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"
import Image from "next/image"
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
          <div className="top">
            <div className="content">
              <div className="date">
                {formatDate(
                  data?.date?.start_date || data.createdTime,
                  CONFIG.lang
                )}
              </div>
              <div>·</div>
              <div>5 min read</div>
            </div>
            <div className="title">{data.title}</div>
            <div className="summary">{data.summary}</div>
          </div>
          <div className="btm">
            {category && <Tag>{category}</Tag>}
            <div className="tags">
              {data.tags &&
                data.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{`#${tag}`}</Tag>
                ))}
            </div>
          </div>
        </div>
        {data.thumbnail && (
          <div className="rt">
            <Image
              src={data.thumbnail}
              fill
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
    height: 200px;
    gap: 24px;

    > .lt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 12px 0;
      > .top {
        > .category {
        }
        > .content {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 12px;
          color: ${({ theme }) => theme.colors.gray12};
        }

        > .title {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 24px;
          font-weight: 600;

          cursor: pointer;
          margin-bottom: 10px;
        }

        > .summary {
          font-size: 18px;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.gray10};
        }
      }
      > .btm {
        display: flex;
        gap: 12px;
        align-items: center;
        .tags {
          display: flex;
          gap: 12px;
        }
      }
    }
    > .rt {
      position: relative;
      width: 260px;
      height: 100%;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
    }
  }
`
