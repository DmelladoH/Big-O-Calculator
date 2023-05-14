import useBigO from '../../hooks/useBigO'
import { useCode } from '../../hooks/useCode'
import LoadingDisplay from '../LoadingDisplay'
import { InfoAppDisplay } from '../InfoAppDisplay'
import AsideContent from './AsideContent'
import { AsideButtonContainer } from './AsideButtonContainer'

export default function Aside () {
  // const { isLoading } = useCode()
  const { code } = useCode()
  const { handleSubmit, isSubmitted, error, isLoading } = useBigO({ code })
  console.log('isLoading', isLoading)
  console.log('isSubmitted', isSubmitted)
  return (
    <aside className='scrollbar-thin sm:scrollbar-thumb-blue-700 scrollbar-track-blue-300 sm:overflow-y-scroll h-[90vh] flex w-screen sm:overflow-auto  sm:w-1/3 flex-col rounded-md bg-[#1e1e1e] my-4 mr-4 px-2'>
        <header>
          <h1 className='text-4xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Big(O) Calculator
          </h1>
          <AsideButtonContainer handleSubmit={handleSubmit} />
        </header>

        {!isLoading && !isSubmitted && <InfoAppDisplay />}
        {isLoading && <LoadingDisplay />}
        {!isLoading && isSubmitted && <AsideContent isError={error !== null}/>}

    </aside>
  )
}
