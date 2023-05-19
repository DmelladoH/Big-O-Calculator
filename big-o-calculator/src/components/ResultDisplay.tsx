import { type ComplexityType } from '../utilities/ComplexityData'
import ComplexityDisplay from './ComplexityDisplay'
import Display from './Display'

interface ResultProps {
  timeComplexity: ComplexityType
  spaceComplexity: ComplexityType
  explication: string
}

export default function ResultDisplay ({ timeComplexity, spaceComplexity, explication }: ResultProps) {
  return (
      <section className='flex flex-col gap-2 text-white p-2 mb-5'>
          <div className='flex mb-5 sm:flex-col justify-around md:flex-row'>
              <div className='flex flex-col gap-2'>
                  <p className='text-white'>Time complexity:</p>
                  <ComplexityDisplay complexity={timeComplexity}/>
              </div>
              <div className='flex flex-col gap-2'>
                  <p className='text-white'>Space complexity:</p>
                  <ComplexityDisplay complexity={spaceComplexity}/>
              </div>
          </div>
          <p className='text-white'>Explanation:</p>
          <Display>
              <p className='text-sm'>{explication}</p>
          </Display>
      </section>
  )
}
