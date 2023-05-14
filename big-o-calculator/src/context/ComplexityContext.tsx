import { createContext, useState } from 'react'
import { getFromStorage } from '../services/storage'

interface ComplexityContextValue {
  timeComplexity: string
  spaceComplexity: string
  explication: string
  setTimeComplexity: (timeComplexity: string) => void
  setSpaceComplexity: (spaceComplexity: string) => void
  setExplication: (explication: string) => void
}

const EMPTY_CONTEXT = {
  timeComplexity: '',
  spaceComplexity: '',
  explication: '',
  setTimeComplexity: () => {},
  setSpaceComplexity: () => {},
  setExplication: () => {}
}

export const ComplexityContext = createContext<ComplexityContextValue>(EMPTY_CONTEXT)

export function ComplexityProvider ({ children }: { children: React.ReactNode }) {
  const [timeComplexity, setTimeComplexity] = useState(getFromStorage('timeComplexity') ?? '')
  const [spaceComplexity, setSpaceComplexity] = useState(getFromStorage('spaceComplexity') ?? '')
  const [explication, setExplication] = useState(getFromStorage('explication') ?? '')

  return (
    <ComplexityContext.Provider value={{ timeComplexity, spaceComplexity, explication, setTimeComplexity, setSpaceComplexity, setExplication }}>
        {children}
    </ComplexityContext.Provider>
  )
}
