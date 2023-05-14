import { useRef, useState } from 'react'
import { getBigO } from '../services/getBigO'
import useComplexity from './useComplexity'
import { setStorage } from '../services/storage'

function useBigO ({ code = '' }: { code: string }) {
  const [error, setError] = useState(null)
  const { setTimeComplexity, setSpaceComplexity, setExplication, timeComplexity, spaceComplexity, explication } = useComplexity()
  const [isSubmitted, setIsSubmitted] = useState(timeComplexity !== '' && spaceComplexity !== '' && explication !== '')

  const prevCodeRef = useRef<string>()

  const handleSubmit = () => {
    if (code === prevCodeRef.current) {
      return
    }

    getBigO({ code }).then(res => {
      prevCodeRef.current = code
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
    })
  }

  return { error, handleSubmit, isSubmitted }
}

export default useBigO
