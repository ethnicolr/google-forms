import { useEffect } from 'react'

export function useOnClickOutside(ref, callback) {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback(true)
    } else {
      callback(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  })
}
