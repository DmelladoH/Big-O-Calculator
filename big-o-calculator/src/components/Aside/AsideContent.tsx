import { useContext } from 'react'
import useBigO from '../../hooks/useBigO'
import { useCode } from '../../hooks/useCode'
import useComplexity from '../../hooks/useComplexity'
import { ErrorDisplay } from '../ErrorDisplay'
import ResultDisplay from '../ResultDisplay'
import { AsideButton } from './AsideButtonContainer'
import { StateContext } from '../../context/StateContext'

export default function AsideContent () {
  const ErrorMessage = 'There was an unexpected error. Please try again.'
  const { timeComplexity, spaceComplexity, explication } = useComplexity()
  const { code } = useCode()
  const { handleSubmit } = useBigO({ code })
  const { isError } = useContext(StateContext)

  const loadingError = isError
  return (
    <>
       <header>
          <h1 className='text-3xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Big(O) Calculator
          </h1>
          <div className='mb-3 mt-3 flex justify-center'>
            <AsideButton handleSubmit={handleSubmit} />
          </div>
        </header>
      {
        loadingError
          ? <ErrorDisplay message={ErrorMessage} />
          : <ResultDisplay
              timeComplexity={timeComplexity}
              spaceComplexity={spaceComplexity}
              explication={explication}/>
      }
    </>
  )
}
