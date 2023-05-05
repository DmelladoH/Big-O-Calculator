import { useState } from 'react'
import Display from './Display'
import useBigO from '../hooks/useBigO'
import { useCode } from '../hooks/useCode'
import Spinner from './Spinner'
import DisplayComplexity from './DisplayComplexity'
import { isOfTypeTimeComplexity } from '../utilities/ComplexityData'

interface AsideProps {
  TimeComplexity: string
  SpaceComplexity: string
  explication: string
}

export default function Aside () {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, timeComplexity, spaceComplexity, explication } = useBigO()
  const { code } = useCode()

  const handleClick = async (): Promise<void> => {
    setIsLoading(true)
    await handleSubmit(code)
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <aside className='flex sm:w-2/6 flex-col bg-zinc-800 p-3'>
        <h1 className='text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-900 bg-clip-text text-transparent text-center mt-0 m-6'>Big O Calculator</h1>
        {isSubmitted && <Content TimeComplexity={timeComplexity} SpaceComplexity={spaceComplexity} explication={explication}/>}
        {isLoading
          ? <Spinner />
          : <button className='b-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-md text-white' onClick={handleClick}>
            <span>
                Calculate
            </span>
        </button>}

    </aside>
  )
}
function Content ({ TimeComplexity, SpaceComplexity, explication }: AsideProps) {
  if (!isOfTypeTimeComplexity(TimeComplexity) || !isOfTypeTimeComplexity(SpaceComplexity)) {
    return (<p>error</p>)
  }

  return (
        <>
            <div className='flex flex-col gap-2 text-white p-2 mb-5'>
                <div className='flex mb-5 justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-white'>Time complexity:</p>
                        <DisplayComplexity complexity={TimeComplexity}/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-white'>Space complexity:</p>
                        <DisplayComplexity complexity={SpaceComplexity}/>
                    </div>
                </div>
                <p className='text-white'>Explanation:</p>
                <Display>
                    <p className='text-sm'>{explication}</p>
                </Display>
            </div>

        </>
  )
}
