import { useState, useRef, useEffect } from 'react'
import Card from '@/components/common/Card'

const Account = () => {
  const [status, setStatus] = useState(false)
  const wrapperRef = useRef()
  const accountRef = useRef()
  const tabs = [
    { label: 'View profile', icon: 'person' },
    { label: 'Setting', icon: 'settings' },
    { label: 'Feedback and help', icon: 'help_outline' },
    { label: 'Keyboard and shortcut', icon: 'keyboard_alt' },
    { label: 'Logout', icon: 'logout' }
  ]

  useEffect(() => {
    if (status) {
      document.addEventListener('click', handleClickOutsideDiv)
    }
    return () => {
      document.removeEventListener('click', handleClickOutsideDiv)
    }
  }, [status])

  const handleClickOutsideDiv = (e) => {
    if (
      accountRef.current &&
      !accountRef.current.contains(e.target) &&
      !wrapperRef.current.contains(e.target)
    ) {
      setStatus(false)
    }
  }

  return (
    <div ref={wrapperRef}>
      <img
        className='w-8 h-8 rounded-full'
        src={require('@/assets/img/namnv.jpg')}
        alt='account'
        onClick={() => setStatus(!status)}
      />
      {status && (
        <Card ref={accountRef} className='absolute w-[230px] right-0 top-[45px] py-1'>
          {tabs.map((tab, i) => {
            return (
              <div
                className='flex items-center gap-3 my-1 py-2 px-2 cursor-pointer hover:bg-gray-100'
                key={i}>
                <span className='material-icons-outlined'>{tab.icon}</span>
                {tab.label}
              </div>
            )
          })}
        </Card>
      )}
    </div>
  )
}

export default Account
