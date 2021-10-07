import { useCallback, useState } from 'react'
import useTimeout from '../hooks/useTimeout'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const UseTimeoutExample = () => {
  const resetCount = useCallback(() => {
    setCount(0)
  }, [])

  const { clear, reset } = useTimeout(resetCount, 2000)
  const [count, setCount] = useState(100)

  return (
    <div>
      <i>
        Count will be set to <b>zero</b> after <b>2 seconds</b> timeout.
        <br />
        By hitting <b>Reset</b> you reset timeout and by hitting <b>Clear</b> you clear timout if in
        progress.
      </i>
      <p>
        Count: <b>{count}</b>
      </p>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => setCount(x => x + 100)}>+100</button>

      <h2>Implementation</h2>
      <SyntaxHighlighter style={github}>
        {`import { useCallback, useEffect, useRef } from 'react'

const useTimeout = (callback: () => void, ms: number) => {
  const timeout = useRef<NodeJS.Timeout>()

  const clear = () => {
    timeout.current && clearTimeout(timeout.current)
  }

  const reset = useCallback(() => {
    clear()
    timeout.current = setTimeout(callback, ms)
  }, [callback, ms])

  useEffect(() => {
    reset()
    return clear
  }, [ms, reset])

  return { clear, reset }
}

export default useTimeout
`}
      </SyntaxHighlighter>

      <h2>Example usage</h2>
      <SyntaxHighlighter style={github}>
        {`const UseTimeoutExample = () => {
const resetCount = useCallback(() => {
  setCount(0)
}, [])

const { clear, reset } = useTimeout(resetCount, 2000)
const [count, setCount] = useState(100)

return (
    <div>
      <p>
        Count: <b>{count}</b>
      </p>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>
      <button onClick={() => setCount(x => x + 100)}>+100</button>
    </div>
  )
}`}
      </SyntaxHighlighter>
    </div>
  )
}

export default UseTimeoutExample
