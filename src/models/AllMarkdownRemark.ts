import { Post } from './Post'

export interface AllMarkdownRemark {
  totalCount: number
  edges: { node: Post }[]
}
