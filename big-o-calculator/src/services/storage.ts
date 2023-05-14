
export function getFromStorage (key: string): any {
  const value = window.localStorage.getItem(key)
  console.log('value', value)
  if (value == null) {
    return null
  }
  return JSON.parse(value)
}

export function setStorage (key: string, value: string) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
