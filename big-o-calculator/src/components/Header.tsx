import { Link } from 'wouter'

export default function Header () {
  return (
    <header className='flex top-0 sticky z-50 justify-between items-center h-12 p-2 sm:px-10 px-4 bg-background'>
        <Link href='/'>
          {/* <Logo text='Big O Calculator' /> */}
          <span className='text-2xl text-white'>
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
