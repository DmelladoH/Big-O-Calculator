import { useRef } from 'react'
import { Editor } from '@monaco-editor/react'
import type * as monaco from 'monaco-editor'
import { useCode } from '../hooks/useCode'

export default function CodeEditor () {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  const { setCode } = useCode()

  function handleEditorDidMount (editor: any, monaco: any) {
    editorRef.current = editor

    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true
    })

    editor.onDidChangeModelContent(() => {
      const value = editor.getValue()
      setCode(value)
    })
  }

  const options: monaco.editor.IEditorConstructionOptions = {
    wordWrap: 'on',
    minimap: { enabled: false },
    folding: false,
    lineNumbersMinChars: 3,
    fontSize: 16,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    contextmenu: false
  }

  return (
    <section className='align-middle justify-center sm:h-full'>
        <Editor
          language='typescript'
          height='100vh'
          theme='vs-dark'
          onMount={handleEditorDidMount}
          options={options}
          />;

    </section>
  )
}
