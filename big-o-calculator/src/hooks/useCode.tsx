import { useContext } from 'react'
import { CodeContext } from '../context/CodeContext'
import { setStorage } from '../services/storage'

export function useCode () {
  const context = useContext(CodeContext)

  if (context === undefined) {
    throw new Error('useCode must be used within a CodeContext')
  }

  const { code, setCode, isLoading, setIsLoading } = context

  const updateCode = (code: string) => {
    setCode(code)
    setStorage('code', code)
  }

  return { code, updateCode, isLoading, setIsLoading }
}
