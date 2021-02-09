import { Post } from './Post'

export interface PathContext {
  tags?: string[]
  categories?: string[]
  categoryName: string
  tagName?: string
  posts?: Post[]
  next: any
  prev: any
}
