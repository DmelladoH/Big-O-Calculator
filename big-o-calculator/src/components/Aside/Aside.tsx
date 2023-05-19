import { useContext } from 'react'
import AsideContent from './AsideContent'
import AsideNoContent from './AsideNoContent'
import { StateContext } from '../../context/StateContext'

export default function Aside () {
  const { isSubmitted, isLoading } = useContext(StateContext)

  console.log('Aside', { isSubmitted, isLoading })
  return (
    <aside className='scrollbar-thin sm:scrollbar-thumb-blue-700 scrollbar-track-blue-300 sm:overflow-y-scroll h-[90vh] flex w-screen sm:overflow-auto  sm:w-1/3 flex-col rounded-md bg-[#1e1e1e] my-4 mr-4 px-2'>
      {
       (!isLoading && isSubmitted)
         ? <AsideContent />
         : <AsideNoContent />
      }
    </aside>
  )
}
