import { useContext } from 'react'
import { InfoAppDisplay } from '../InfoAppDisplay'
import LoadingDisplay from '../LoadingDisplay'
import { StateContext } from '../../context/StateContext'
import { AsideButton } from './AsideButtonContainer'
import useBigO from '../../hooks/useBigO'
import { useCode } from '../../hooks/useCode'

export default function AsideNoContent () {
  const { isLoading } = useContext(StateContext)
  const { code } = useCode()
  const { handleSubmit } = useBigO({ code })

  return (
      <>
        <header>
          <h1 className='text-4xl p-4 mt-5 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
            Big(O) Calculator
          </h1>
          <div className='mb-3 mt-10 flex justify-center'>
          <AsideButton handleSubmit={handleSubmit} />
          </div>
        </header>
        {
          isLoading
            ? <LoadingDisplay />
            : <InfoAppDisplay />
        }
      </>
  )
}
