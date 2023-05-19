import { createContext, useState } from 'react'
import { getFromStorage } from '../services/storage'

interface CodeContextValue {
  code: string
  setCode: (code: string) => void
}

const EMPTY_CONTEXT = {
  code: '',
  isLoading: false,
  setCode: () => {},
  setIsLoading: () => {}
}

export const CodeContext = createContext<CodeContextValue>(EMPTY_CONTEXT)

export function CodeProvider ({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState(getFromStorage('code') ?? '')

  return (
   <CodeContext.Provider value={{ code, setCode }}>
      {children}
   </CodeContext.Provider>
  )
}
