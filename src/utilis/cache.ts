class LocalCache {
  setCatch(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCatch(key: string) {
    const result = window.localStorage.getItem(key)
    if (result) {
      return JSON.parse(result)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCatch() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
