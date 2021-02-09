import { Data, PathContext, PageResources } from './index'

export interface PageProps {
  data: Data
  location: Location
  pageResources?: PageResources
  pathContext: PathContext
}
