import { useContext } from 'react'
import { ComplexityContext } from '../context/ComplexityContext'

export default function useComplexity () {
  const context = useContext(ComplexityContext)

  if (context === undefined) {
    throw new Error('useBigO must be used within a ComplexityContext')
  }

  return context
}
