import { createContext, useState } from 'react'
import { getFromStorage } from '../services/storage'

interface StateContextValue {
  isLoading: boolean
  isSubmitted: boolean
  isError: boolean
  setIsLoading: (isLoading: boolean) => void
  setIsSubmitted: (isSubmitted: boolean) => void
  setIsError: (isError: boolean) => void
}

const EMPTY_CONTEXT = {
  isLoading: false,
  isSubmitted: false,
  isError: false,
  setIsSubmitted: () => {},
  setIsLoading: () => {},
  setIsError: () => {}
}

export const StateContext = createContext<StateContextValue>(EMPTY_CONTEXT)

export function StateProvider ({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const defaultIsSubmitted = getFromStorage('timeComplexity') !== null ||
                            getFromStorage('spaceComplexity') !== null ||
                            getFromStorage('explication') !== null

  const [isSubmitted, setIsSubmitted] = useState(defaultIsSubmitted)
  const [isError, setIsError] = useState((Boolean(getFromStorage('error'))) || false)

  return (
   <StateContext.Provider value={{ isLoading, setIsLoading, isSubmitted, setIsSubmitted, isError, setIsError }}>
      {children}
    </StateContext.Provider>
  )
}
