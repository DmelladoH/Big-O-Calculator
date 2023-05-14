import { createContext, useState } from 'react'
import { getFromStorage } from '../services/storage'

interface CodeContextValue {
  code: string
  isLoading: boolean
  setCode: (code: string) => void
  setIsLoading: (isLoading: boolean) => void
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
  const [isLoading, setIsLoading] = useState(false)

  return (
   <CodeContext.Provider value={{ code, setCode, isLoading, setIsLoading }}>
      {children}
    </CodeContext.Provider>
  )
}
