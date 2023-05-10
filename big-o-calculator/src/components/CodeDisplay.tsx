
// import { CodeBlock } from 'react-code-blocks'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeDisplayProps {
  code: string
  language: string
}
export default function CodeDisplay ({ code, language }: CodeDisplayProps) {
  return (
      <SyntaxHighlighter language={language} style={oneDark}>
        {code}
      </SyntaxHighlighter>
  )
}
