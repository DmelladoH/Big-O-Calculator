import { isOfTypeComplexity } from '../utilities/ComplexityData'
import ComplexityDisplay from './ComplexityDisplay'
import Display from './Display'

interface ResultProps {
  timeComplexity: string
  spaceComplexity: string
  explication: string
}

export default function ResultDisplay ({ timeComplexity, spaceComplexity, explication }: ResultProps) {
  const isTimeComplexityKnown = isOfTypeComplexity(timeComplexity)
  const isSpaceComplexityKnown = isOfTypeComplexity(spaceComplexity)

  return (
      <section className='flex flex-col gap-2 text-white p-2 mb-5'>
          <div className='flex mb-5 sm:flex-col justify-around gap-3 md:flex-row'>
              <div className='flex flex-col gap-2'>
                  <p className='text-white'>Time complexity:</p>
                  {isTimeComplexityKnown
                    ? <ComplexityDisplay complexity={timeComplexity}/>
                    : <UnknownComplexityDisplay complexity={timeComplexity}/>
                    }
                </div>
              <div className='flex flex-col gap-2'>
                  <p className='text-white'>Space complexity:</p>
                  {isSpaceComplexityKnown
                    ? <ComplexityDisplay complexity={spaceComplexity}/>
                    : <UnknownComplexityDisplay complexity={spaceComplexity}/>
                    }
              </div>
          </div>
          <p className='text-white'>Explanation:</p>
          <Display>
              <p className='text-sm'>{explication}</p>
          </Display>
      </section>
  )
}

function UnknownComplexityDisplay ({ complexity }: { complexity: string }) {
  return (
        <section className="bg-zinc-800 px-1 py-2 flex min-w-[9rem] h-36 xl:min-w-[10rem] xl:h-40 gap-4 flex-col justify-center rounded-xl text-center" >
            <span className={'text-white text-4xl'}>{complexity}</span>
        </section>
  )
}
