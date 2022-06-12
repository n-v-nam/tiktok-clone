import { forwardRef } from 'react'

const Card = ({ children, className = null, ...css }, ref) => {
  const style = {
    boxShadow: 'rgb(0 0 0 / 12%) 0px -4px 32px',
    backgroundColor: '#ffffff',
    ...css
  }

  return (
    <div
      ref={ref}
      className={`rounded-md transition-all delay-300 text-sm ${className}`}
      style={style}>
      {children}
    </div>
  )
}

export default forwardRef(Card)
