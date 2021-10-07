import { useCallback, useEffect, useRef } from 'react'

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
