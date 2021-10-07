import { useState } from 'react'

const useToggle = (values: any[]) => {
  const [value, setValue] = useState(values[0])
}

export default useToggle
