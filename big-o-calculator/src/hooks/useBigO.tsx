import { useContext, useState } from 'react'
import { getBigO } from '../services/getBigO'
import { ComplexityContext } from '../context/ComplexityContext'

function useBigO () {
  const context = useContext(ComplexityContext)
  const [error, setError] = useState(null)

  if (context === undefined) {
    throw new Error('useBigO must be used within a ComplexityContext')
  }

  const {
    timeComplexity,
    spaceComplexity,
    explication,
    setTimeComplexity,
    setSpaceComplexity,
    setExplication,
    isSubmitted,
    setIsSubmitted
  } = context

  const handleSubmit = (code: string) => {
    getBigO({ code }).then(res => {
      setTimeComplexity(res.TimeComplexity)
      setSpaceComplexity(res.SpaceComplexity)
      setExplication(res.Explanation)
      setError(null)
      console.log('res', res)
    }).catch(err => {
      console.log('Error getting the data', err)
      setError(err)
    }).finally(() => {
      setIsSubmitted(true)
      console.log('finally', isSubmitted)
    })
  }

  return { timeComplexity, spaceComplexity, explication, error, isSubmitted, handleSubmit }
}

export default useBigO
