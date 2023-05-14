
export function getFromStorage (key: string): any {
  const value = window.localStorage.getItem(key)
  if (value == null || value === 'undefined') {
    return null
  }
  return JSON.parse(value)
}

export function setStorage (key: string, value: string) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
