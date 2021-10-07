import { useRef, useState } from 'react'

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
