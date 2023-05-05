import { Link } from 'wouter'

export default function Header () {
  return (
    <header className='flex justify-between items-center h-12 p-2 px-10 bg-zinc-800'>
        <Link href='/'>
            <a className='text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-900 bg-clip-text text-transparent text-center m-7'>Big O Calculator</a>
        </Link>
        <Link href='/big-o'>
            <a className='text-white text-sm'>
                Learn about Big O
            </a>
        </Link>
    </header>
  )
}
