import useStateWithHistory from '../hooks/useStateWithHistory'

const UseStateWithHistoryExample = () => {
  const [value, setValue, { history, cursor, goBack, goForward }] = useStateWithHistory(1)

  return (
    <div className='App'>
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
    </div>
  )
}

export default UseStateWithHistoryExample
