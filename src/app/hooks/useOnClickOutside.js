import { useEffect } from 'react'

export function useOnClickOutside(ref, callback) {
  const handleClick = (e) => {
    console.log(e.target)
    if (ref.current && ref.current.contains(e.target)) {
      callback(true)
    } else {
      callback(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
