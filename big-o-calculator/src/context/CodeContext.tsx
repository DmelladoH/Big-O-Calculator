import { createContext, useState } from 'react'

interface CodeContextValue {
  code: string
  setCode: (code: string) => void
}

export const CodeContext = createContext<CodeContextValue>({ code: '', setCode: () => {} })

export function CodeProvider ({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState('')

  return (
   <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  )
}
