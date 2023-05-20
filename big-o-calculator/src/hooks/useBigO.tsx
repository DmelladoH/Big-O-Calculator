import { useContext, useEffect, useRef } from 'react'
import { getBigO } from '../services/getBigO'
import useComplexity from './useComplexity'
import { setStorage } from '../services/storage'
import { StateContext } from '../context/StateContext'
import { isOfTypeComplexity } from '../utilities/ComplexityData'

function useBigO ({ code = '' }: { code: string }) {
  const prevCodeRef = useRef<string>('')
  const isLoadingRef = useRef<boolean>(false)

  const { setIsLoading, setIsSubmitted, setIsError, isError } = useContext(StateContext)
  const { setTimeComplexity, setSpaceComplexity, setExplication, timeComplexity } = useComplexity()

  const isErrorRef = useRef<boolean>(isError)

  useEffect(() => {
    prevCodeRef.current = code
  }, [timeComplexity]) // TODO find a better way to handle this.

  const handleSubmit = async () => {
    if ((code === prevCodeRef.current || isLoadingRef.current) && !isErrorRef.current) {
      return
    }

    setIsLoading(true)
    isLoadingRef.current = true

    try {
      const res = await getBigO({ code })

      prevCodeRef.current = code

      if (!isOfTypeComplexity(res.TimeComplexity) || !isOfTypeComplexity(res.SpaceComplexity)) {
        throw new Error('Invalid Complexity')
      }

      setTimeComplexity(res.TimeComplexity)
      setSpaceComplexity(res.SpaceComplexity)
      setExplication(res.Explanation)

      setStorage('timeComplexity', res.TimeComplexity)
      setStorage('spaceComplexity', res.SpaceComplexity)
      setStorage('explication', res.Explanation)
      setStorage('error', false)

      setIsError(false)
    } catch (err) {
      setIsError(true)
      console.log(err)
      setStorage('error', true)
      isErrorRef.current = true
    } finally {
      setIsSubmitted(true)
      setIsLoading(false)
      isLoadingRef.current = false
    }
  }

  return { handleSubmit }
}

export default useBigO
