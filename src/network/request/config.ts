let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://152.136.185.210:4000/'
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:4000/'
} else {
  BASE_URL = ''
}

export { BASE_URL }
