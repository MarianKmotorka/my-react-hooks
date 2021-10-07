import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useNext from '../hooks/useNext'

const UseNextExample = () => {
  const { value, next } = useNext(['red', 'orange', 'green'])

  return (
    <div>
      <i>
        This hook can be used to cycle over an array of items by calling <b>next()</b>.
        <br />
        In this example you can cycle over <b style={{ color: 'red' }}>red</b>{' '}
        <b style={{ color: 'orange' }}>orange</b> <b style={{ color: 'green' }}>green</b> colors.
      </i>
      <p>
        Value: <b style={{ color: value }}>{value}</b>
      </p>
      <button onClick={next}>Next</button>

      <h2>Implementation</h2>
      <SyntaxHighlighter style={github}>
        {`import { useRef, useState } from 'react'

const useNext = (values: any[]) => {
  const [value, setValue] = useState(values[0])
  const indexRef = useRef(0)

  const next = () => {
    const nextIndex = ++indexRef.current % values.length
    setValue(values[nextIndex])
  }

  return { value, next }
}

export default useNext
`}
      </SyntaxHighlighter>

      <h2>Example usage</h2>
      <SyntaxHighlighter style={github}>
        {`const UseNextExample = () => {
  const { value, next } = useNext(['red', 'orange', 'green'])

  return (
    <div>
      <p>
        Value: <b style={{ color: value }}>{value}</b>
      </p>
      <button onClick={next}>Next</button>
    </div>
    )
  }`}
      </SyntaxHighlighter>
    </div>
  )
}

export default UseNextExample
