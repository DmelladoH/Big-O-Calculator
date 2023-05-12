import Aside from '../components/Aside'
import CodeEditor from '../components/CodeEditor'

export default function Home () {
  return (
    <main className='flex flex-col bg-zinc-800 sm:flex-row'>
        <div className='flex w-screen sm:w-4/6 flex-col'>
          <CodeEditor/>
        </div>
        <Aside />
    </main>
  )
}

// sm:w-4/6 md:w-3/6
