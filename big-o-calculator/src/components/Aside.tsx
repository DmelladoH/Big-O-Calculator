import Display from './Display'
import useBigO from '../hooks/useBigO'
import { useCode } from '../hooks/useCode'
import DisplayComplexity from './DisplayComplexity'
import { isOfTypeComplexity } from '../utilities/ComplexityData'
import LoadingDisplay from './LoadingDisplay'
import { ComplexityProvider } from '../context/ComplexityContext'
import Logo from './Logo'
import { ErrorDisplay } from './ErrorDisplay'
import { InfoAppDisplay } from './InfoAppDisplay'

export function ButtonContainer () {
  const { handleSubmit } = useBigO()
  const { setIsLoading, code } = useCode()

  const handleClick = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    handleSubmit(code)
    setIsLoading(false)
  }

  return (
    <div className='mb-3 mt-10 flex justify-center'>
      <button type="button"
              className="b-0 w-3/6 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleClick}>
              Calculate
      </button>
    </div>
  )
}

export default function Aside () {
  const { isLoading } = useCode()
  return (
    <aside className='scrollbar-thin sm:scrollbar-thumb-blue-700 scrollbar-track-blue-300 sm:overflow-y-scroll h-[90vh] flex w-screen sm:overflow-auto  sm:w-2/6 flex-col bg-background py-4 px-6'>
        <h1 className='text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
          Big(O) Calculator
        </h1>
        {
          isLoading
            ? <LoadingDisplay />
            : (
                <ComplexityProvider>
                  <Content/>
                </ComplexityProvider>
              )

        }
    </aside>
  )
}

function Content () {
  const { isSubmitted } = useBigO()

  return (
    <>
      <ButtonContainer />
      {
        isSubmitted
          ? <Result />
          : <InfoAppDisplay />
      }
    </>
  )
}

function Result () {
  const { timeComplexity, spaceComplexity, explication, error } = useBigO()
  const ErrorMessage = 'There was an unexpected error. Please try again.'

  if (error !== null || !isOfTypeComplexity(timeComplexity) || !isOfTypeComplexity(spaceComplexity)) {
    return (
      <ErrorDisplay message={ErrorMessage} />
    )
  }

  return (
    <section className='flex flex-col gap-2 text-white p-2 mb-5'>
        <div className='flex mb-5 sm:flex-col justify-between md:flex-row'>
            <div className='flex flex-col gap-2'>
                <p className='text-white'>Time complexity:</p>
                <DisplayComplexity complexity={timeComplexity}/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-white'>Space complexity:</p>
                <DisplayComplexity complexity={spaceComplexity}/>
            </div>
        </div>
        <p className='text-white'>Explanation:</p>
        <Display>
            <p className='text-sm'>{explication}</p>
        </Display>
    </section>
  )
}
