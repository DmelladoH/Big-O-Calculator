import { createContext, useState } from 'react'

interface ComplexityContextValue {
  timeComplexity: string
  spaceComplexity: string
  explication: string
  isSubmitted: boolean
  setTimeComplexity: (timeComplexity: string) => void
  setSpaceComplexity: (spaceComplexity: string) => void
  setExplication: (explication: string) => void
  setIsSubmitted: (isSubmitted: boolean) => void
}

const EMPTY_CONTEXT = {
  timeComplexity: '',
  spaceComplexity: '',
  explication: '',
  isSubmitted: false,
  setTimeComplexity: () => {},
  setSpaceComplexity: () => {},
  setExplication: () => {},
  setIsSubmitted: () => {}
}

export const ComplexityContext = createContext<ComplexityContextValue>(EMPTY_CONTEXT)

export function ComplexityProvider ({ children }: { children: React.ReactNode }) {
  const [timeComplexity, setTimeComplexity] = useState('')
  const [spaceComplexity, setSpaceComplexity] = useState('')
  const [explication, setExplication] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  return (
    <ComplexityContext.Provider value={{ timeComplexity, spaceComplexity, explication, isSubmitted, setIsSubmitted, setTimeComplexity, setSpaceComplexity, setExplication }}>
        {children}
    </ComplexityContext.Provider>
  )
}
