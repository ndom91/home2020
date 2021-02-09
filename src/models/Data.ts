import { AllMarkdownRemark } from './AllMarkdownRemark'
import { Post } from './Post'

export interface Data {
  allMarkdownRemark: AllMarkdownRemark
  markdownRemark: Post
}
