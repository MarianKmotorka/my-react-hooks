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
