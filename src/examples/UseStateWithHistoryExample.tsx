import SyntaxHighlighter from 'react-syntax-highlighter'
import useStateWithHistory from '../hooks/useStateWithHistory'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const UseStateWithHistoryExample = () => {
  const [value, setValue, { history, cursor, goBack, goForward }] = useStateWithHistory(1)

  return (
    <div>
      <p>
        History: {[...history].splice(0, cursor).join(' ')} <strong>{value}</strong>{' '}
        {[...history].splice(cursor + 1, history.length - 1).join(' ')}
      </p>
      <p>Cursor: {cursor}</p>
      <h3>VALUE: {value}</h3>

      <button onClick={() => setValue(x => x + 1)}>INCREMENT</button>
      <button onClick={() => setValue(x => 2 * x)}>DOUBLE</button>
      <button onClick={goBack}>GO BACK</button>
      <button onClick={goForward}>GO FORWARD</button>

      <h2>Implementation</h2>
      <SyntaxHighlighter language='typescript' style={github}>
        {`import { useCallback, useRef, useState } from 'react'

type DefaultValue<T> = T | (() => T)
type SetParameter<T> = T | ((prev: T) => T)

const useStateWithHistory = <T>(defaultValue: DefaultValue<T>, capacity = 10) => {
  const [value, setValue] = useState<T>(defaultValue)
  const history = useRef<T[]>([value])
  const cursor = useRef<number>(0)

  const set = (parameter: SetParameter<T>) => {
    const resolvedValue: T =
      typeof parameter === 'function' ? (parameter as Function)(value) : parameter

    if (history.current[cursor.current] === resolvedValue) return

    if (cursor.current < history.current.length - 1)
      history.current = history.current.splice(0, cursor.current + 1)

    history.current.push(resolvedValue)

    if (history.current.length > capacity) history.current.shift()

    cursor.current = history.current.length - 1
    setValue(resolvedValue)
  }

  const goBack = useCallback(() => {
    if (cursor.current === 0) return
    setValue(history.current[--cursor.current])
  }, [])

  const goForward = useCallback(() => {
    if (cursor.current === history.current.length - 1) return
    setValue(history.current[++cursor.current])
  }, [])

  return [
    value,
    set,
    { history: history.current, cursor: cursor.current, goBack, goForward }
  ] as const
}

export default useStateWithHistory
`}
      </SyntaxHighlighter>
    </div>
  )
}

export default UseStateWithHistoryExample
