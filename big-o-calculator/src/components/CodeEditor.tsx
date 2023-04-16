import { useRef } from 'react'
import Editor from '@monaco-editor/react'
import type * as monaco from 'monaco-editor'

export default function CodeEditor () {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  function handleEditorDidMount (editor: any, monaco: any) {
    editorRef.current = editor
  }

  return (
    <section className='h-96 flex align-middle justify-center m-9'>
        <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            onMount={handleEditorDidMount}
        />
    </section>
  )
}
