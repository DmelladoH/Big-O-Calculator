import { useContext } from 'react'
import { CodeContext } from '../context/CodeContext'

export function useCode () {
  const context = useContext(CodeContext)

  if (context === undefined) {
    throw new Error('useCode must be used within a CodeContext')
  }

  return context
}
