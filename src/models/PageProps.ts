import { PageProps } from 'gatsby'
import { Data, PathContext } from './index'

export interface DefaultPageProps extends PageProps {
  data: Data
  pathContext: PathContext
  pageContext: {
    currentPage: number
    totalPages: number
  }
}
