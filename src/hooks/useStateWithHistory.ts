import { useCallback, useRef, useState } from 'react'

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
