import CFRequest from './request'

import { BASE_URL } from './request/config'

const cfRequest = new CFRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor(config) {
      return config
    }
  }
  // showLoading: false
})

export default cfRequest
