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

export const addSuffixToNumber = (number: number) => {
  var tenth = number % 10,
    hundred = number % 100
  if (tenth == 1 && hundred != 11) {
    return number + 'st'
  }
  if (tenth == 2 && hundred != 12) {
    return number + 'nd'
  }
  if (tenth == 3 && hundred != 13) {
    return number + 'rd'
  }
  return number + 'th'
}
