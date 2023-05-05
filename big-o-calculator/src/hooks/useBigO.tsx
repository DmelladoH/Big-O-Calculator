import { useState } from 'react'
import { getBigO } from '../services/getBigO'

function useBigO () {
  const [spaceComplexity, setSpaceComplexity] = useState('')
  const [timeComplexity, setTimeComplexity] = useState('')
  const [explication, setExplication] = useState('')

  const handleSubmit = async (code: string): Promise<void> => {
    try {
      const res = await getBigO({ code })
      setTimeComplexity(res.TimeComplexity)
      setSpaceComplexity(res.SpaceComplexity)
      setExplication(res.Explanation)
    } catch (error) {
      console.log(error)
    }
  }

  return { spaceComplexity, timeComplexity, explication, handleSubmit }
}

export default useBigO
