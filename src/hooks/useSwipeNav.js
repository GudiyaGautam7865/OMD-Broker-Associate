import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const ROUTES = ['/', '/app', '/contact']
const MIN_SWIPE = 60   // px
const MAX_VERT  = 80   // px — ignore if too vertical

export default function useSwipeNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const touch = useRef(null)

  useEffect(() => {
    const onStart = e => {
      touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const onEnd = e => {
      if (!touch.current) return
      const dx = e.changedTouches[0].clientX - touch.current.x
      const dy = Math.abs(e.changedTouches[0].clientY - touch.current.y)
      touch.current = null

      if (Math.abs(dx) < MIN_SWIPE || dy > MAX_VERT) return

      const idx = ROUTES.indexOf(location.pathname)
      if (dx < 0 && idx < ROUTES.length - 1) navigate(ROUTES[idx + 1]) // swipe left → next
      if (dx > 0 && idx > 0) navigate(ROUTES[idx - 1])                  // swipe right → prev
    }

    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [location.pathname, navigate])
}
