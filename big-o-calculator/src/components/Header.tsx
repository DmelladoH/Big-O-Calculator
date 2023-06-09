import { Link } from 'wouter'

export default function Header () {
  return (
    <header className='flex top-0 sticky z-50 justify-between items-center h-12 p-2 sm:px-10 px-4 bg-[#1e1e1e]'>
        <Link href='/'>
          {/* <Logo text='Big O Calculator' /> */}
          <span className='text-xl sm:text-2xl text-white cursor-pointer'>
            Big(O) Calculator
          </span>
        </Link>
        <Link href='/big-o'>
            <a className='text-white text-sm hover:text-pink_primary'>
                Learn about Big O
            </a>
        </Link>
    </header>
  )
}
