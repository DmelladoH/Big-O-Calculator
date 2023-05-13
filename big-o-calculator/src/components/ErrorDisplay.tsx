interface ErrorDisplayProps {
  message: string
}

export function ErrorDisplay ({ message }: ErrorDisplayProps) {
  return (
        <div className='flex flex-col justify-center items-center gap-4 my-8'>
            <h3 className='text-6xl text-white'>Oopps!</h3>
            <p className='text-md text-white'>{message}</p>
        </div>
  )
}
