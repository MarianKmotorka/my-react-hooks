import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useArray from '../hooks/useArray'

const UseArrayExample = () => {
  const [colors, { push, pop }] = useArray(['red', 'orange', 'green'])

  const addRandomColor = () => {
    const chars = '0123456789abcdef'
    let randColor = '#'

    for (let i = 0; i < 6; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)]
      randColor += randomChar
    }

    push(randColor)
  }

  return (
    <div>
      <i>This hook makes operation upon array state feel like working with an regular array.</i>
      <br />
      <button onClick={addRandomColor}>+ Add random color</button>
      <button onClick={pop}>- Remove last</button>

      <p>
        Value:
        {colors.map(x => (
          <div style={{ color: x }}>{x}</div>
        ))}
      </p>

      <h2>Implementation</h2>
      <SyntaxHighlighter style={github}>
        {`
import { useState } from 'react'

const useArray = <T extends any>(arr: T[]) => {
  const [state, setState] = useState(arr)

  const push = (item: T) => {
    setState(x => [...x, item])
  }

  const pop = () => {
    if (state.length === 0) return
    let newValue = [...state]
    newValue.pop()
    setState(newValue)
  }

  return [state, { push, pop }] as const
}

export default useArray

`}
      </SyntaxHighlighter>

      <h2>Example usage</h2>
      <SyntaxHighlighter style={github}>
        {`const [colors, { push, pop }] = useArray(['red', 'orange', 'green'])

  const addRandomColor = () => {
    const chars = '0123456789abcdef'
    let randColor = '#'

    for (let i = 0; i < 6; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)]
      randColor += randomChar
    }

    push(randColor)
  }

  return (
    <div>
      <p>
        Value:
        {colors.map(x => (
          <div style={{ color: x }}>{x}</div>
        ))}
      </p>

      <button onClick={addRandomColor}>+ Add random color</button>
      <button onClick={pop}>- Remove last</button>
    )
  }`}
      </SyntaxHighlighter>
    </div>
  )
}

export default UseArrayExample
