import { useRef, useState } from 'react'
import { getBigO } from '../services/getBigO'
import useComplexity from './useComplexity'
import { setStorage } from '../services/storage'

function useBigO ({ code = '' }: { code: string }) {
  const [error, setError] = useState(null)
  const { setTimeComplexity, setSpaceComplexity, setExplication, timeComplexity, spaceComplexity, explication } = useComplexity()
  const [isSubmitted, setIsSubmitted] = useState(timeComplexity !== '' && spaceComplexity !== '' && explication !== '')
  const [isLoading, setIsLoading] = useState(false)
  const prevCodeRef = useRef<string>()

  const handleSubmit = () => {
    if (code === prevCodeRef.current || isLoading) {
      return
    }
    setIsLoading(true)
    getBigO({ code }).then(res => {
      prevCodeRef.current = code
      console.log(res)

      setTimeComplexity(res.TimeComplexity)
      setSpaceComplexity(res.SpaceComplexity)
      setExplication(res.Explanation)
      setStorage('timeComplexity', res.TimeComplexity)
      setStorage('spaceComplexity', res.SpaceComplexity)
      setStorage('explication', res.Explanation)
      setError(null)
    }).catch(err => {
      setError(err)
    }).finally(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    })
  }

  return { error, handleSubmit, isSubmitted, isLoading }
}

export default useBigO
