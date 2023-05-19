import { Link } from 'wouter'

export function InfoAppDisplay () {
  return (
      <section className='text-white text-center flex flex-col gap-3 space-y-2.5 p-2 lg:p-10'>
        <p>Analyze the <span className='font-bold'>time</span> and <span className='font-bold'>space</span> complexity of your algorithms quickly and easily.</p>
        <p>Paste your code, and receive a detailed analysis of its efficiency.</p>
        <p>
          Whether you are a student, developer, or simply looking to optimize your code, this tool is essential
          for improving the performance of your programs.
        </p>
        <p>If you want to learn more about complexity: </p>
        <p><Link className="text-blue-300 hover:text-blue-500 underline" href='/big-o'>Learn more.</Link></p>
      </section>

  )
}
