import Aside from '../components/Aside/Aside'
import CodeEditor from '../components/CodeEditor'
import { ComplexityProvider } from '../context/ComplexityContext'

export default function Home () {
  return (
    <div className='flex-col flex w-screen bg-background sm:flex-row' style={{ height: 'calc(100% - 100px)' }}>
        <main className='flex flex-1 w-screen sm:w-4/6 flex-col'>
          <CodeEditor/>
        </main>
        <ComplexityProvider>
          <Aside />
        </ComplexityProvider>
        { /* <div className='flex flex-col bg-zinc-800 sm:flex-row' style={{ height: 'calc(100% - 100px);' }}> */ }
    </div>
  )
}

// sm:w-4/6 md:w-3/6
