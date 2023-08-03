export const localStorageHelper = {
  getItem(key: any) {
    try {
      const value = window.localStorage.getItem(key) || ''
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  },
  setItem(key: any, value: any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value || null))
    } catch (err) {}
  },
  removeItem(key: any) {
    try {
      window.localStorage.removeItem(key)
    } catch (err) {}
  },
}
