import Aside from '../components/Aside/Aside'
import CodeEditor from '../components/CodeEditor'
import { ComplexityProvider } from '../context/ComplexityContext'
import { StateProvider } from '../context/StateContext'

export default function Home () {
  return (
    <div className='flex-col flex w-screen bg-background sm:flex-row' style={{ height: 'calc(100% - 100px)' }}>
        <main className='flex flex-1 w-screen sm:w-2/3 flex-col bg-[#1e1e1e] rounded-md p-2 m-4'>
          <CodeEditor/>
        </main>
        <ComplexityProvider>
          <StateProvider>
            <Aside />
          </StateProvider>
        </ComplexityProvider>
    </div>
  )
}
