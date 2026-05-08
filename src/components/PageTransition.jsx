import { useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const ROUTE_ORDER = ['/', '/app', '/contact']

const styles = `
  @keyframes slideInFromRight {
    from { transform: translateX(100%); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }
  @keyframes slideInFromLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }
  @keyframes slideOutToLeft {
    from { transform: translateX(0);    opacity: 1; }
    to   { transform: translateX(-100%); opacity: 0; }
  }
  @keyframes slideOutToRight {
    from { transform: translateX(0);   opacity: 1; }
    to   { transform: translateX(100%); opacity: 0; }
  }

  .page-slide-wrapper {
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .page-enter-forward {
    animation: slideInFromRight 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  .page-enter-back {
    animation: slideInFromLeft 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  .page-exit-forward {
    position: absolute;
    inset: 0;
    animation: slideOutToLeft 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    pointer-events: none;
    z-index: 0;
  }
  .page-exit-back {
    position: absolute;
    inset: 0;
    animation: slideOutToRight 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    pointer-events: none;
    z-index: 0;
  }
`

export default function PageTransition({ children }) {
  const location = useLocation()
  const prevPath = useRef(location.pathname)
  const prevChildren = useRef(children)
  const [exiting, setExiting] = useState(null) // { node, dir }
  const [direction, setDirection] = useState('forward')
  const [key, setKey] = useState(location.pathname)

  useEffect(() => {
    if (location.pathname === prevPath.current) return

    const prev = ROUTE_ORDER.indexOf(prevPath.current)
    const next = ROUTE_ORDER.indexOf(location.pathname)
    const dir = next >= prev ? 'forward' : 'back'

    setDirection(dir)
    setExiting({ node: prevChildren.current, dir })
    setKey(location.pathname)
    prevPath.current = location.pathname

    const timer = setTimeout(() => setExiting(null), 450)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    prevChildren.current = children
  })

  return (
    <>
      <style>{styles}</style>
      <div className="page-slide-wrapper">
        {/* Exiting page */}
        {exiting && (
          <div className={exiting.dir === 'forward' ? 'page-exit-forward' : 'page-exit-back'}>
            {exiting.node}
          </div>
        )}
        {/* Entering page */}
        <div
          key={key}
          className={direction === 'forward' ? 'page-enter-forward' : 'page-enter-back'}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
