import { useCode } from '../../hooks/useCode'

export function AsideButtonContainer ({ handleSubmit }: any) {
  const { setIsLoading, isLoading } = useCode()

  const handleClick = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    handleSubmit()
    setIsLoading(false)
  }

  return (
      <div className='mb-3 mt-10 flex justify-center'>
        <button type="button"
                className="b-0 w-3/6 disabled:text-red-500 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={handleClick}
                disabled={isLoading}>
                Calculate
        </button>
      </div>
  )
}
