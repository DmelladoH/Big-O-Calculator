import { useContext } from 'react'
import { StateContext } from '../../context/StateContext'

export function AsideButton ({ handleSubmit }: any) {
  const { isLoading } = useContext(StateContext)

  const handleClick = (event: any) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
        <button type="button"
                className="b-0 w-3/6 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleClick}
                disabled={isLoading}>
                Calculate
        </button>
  )
}
