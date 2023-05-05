export default function Footer ({ onClick }: any) {
  return (
    <section className='flex justify-end p-2'>
    <button onClick={onClick} className='b-0 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-md text-white'>
      <span>
        Calculate
      </span>
    </button>
  </section>
  )
}
