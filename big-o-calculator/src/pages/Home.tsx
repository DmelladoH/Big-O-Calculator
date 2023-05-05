import Aside from '../components/Aside'
import CodeEditor from '../components/CodeEditor'

export default function Home () {
  return (
    <main className='flex flex-col max-h-full sm:flex-row'>
        <div className='flex sm:w-4/6 flex-col'>
          <CodeEditor/>
        </div>
        <Aside />
    </main>
  )
}
