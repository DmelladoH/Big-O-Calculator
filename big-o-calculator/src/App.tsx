/* eslint-disable @typescript-eslint/no-misused-promises */
import './App.css'
import CodeEditor from './components/CodeEditor'
import Aside from './components/Aside'

function App () {
  return (
    <div className="flex flex-col align-middle h-screen w-screen">
      <header className='h-12 p-2 bg-zinc-800'>
        <span className='text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-900 bg-clip-text text-transparent text-center m-7'>Big O Calculator</span>
      </header>
      <div className='flex flex-col h-full sm:flex-row'>
        <div className='flex sm:w-4/6 flex-col'>
          <CodeEditor/>
        </div>
        <Aside />
        </div>
    </div>
  )
}

export default App
