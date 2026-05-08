import { useLocation } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

const ROUTE_ORDER = ['/', '/app', '/contact']

export default function usePageDirection() {
  const location = useLocation()
  const prevPath = useRef(location.pathname)
  const [direction, setDirection] = useState('forward')

  useEffect(() => {
    const prev = ROUTE_ORDER.indexOf(prevPath.current)
    const next = ROUTE_ORDER.indexOf(location.pathname)
    setDirection(next >= prev ? 'forward' : 'back')
    prevPath.current = location.pathname
  }, [location.pathname])

  return direction
}
