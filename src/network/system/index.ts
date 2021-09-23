import cfRequest from '../index'

import { IResultType } from '../type'

export function getPageListData(url: string, queryInfo: any) {
  return cfRequest.post<IResultType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return cfRequest.delete<IResultType>({
    url
  })
}
