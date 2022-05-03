import { useState } from 'react'

const Header = () => {
  const tabs = [
    { label: 'All', value: 0 },
    { label: 'Likes', value: 1 },
    { label: 'Comments', value: 2 },
    { label: 'Mentions', value: 3 },
    { label: 'Followers', value: 3 }
  ]
  const [selected, setSelected] = useState('All')

  const handleClick = (e) => {
    const tabName = e.target.innerText
    setSelected(tabName)
  }
  return (
    <div className='w-full h-[104px] pt-6'>
      <h4 className='font-bold text-xl'>Notifications</h4>
      <div className='tabs text-sm mt-4'>
        {tabs.map((tab, index) => {
          return (
            <span
              onClick={handleClick}
              key={index}
              className={`mr-2 px-2 rounded-[92px] bg-gray-100 cursor-pointer ${
                selected === tab.label ? 'text-white bg-gray-800' : 'hover:bg-gray-200'
              }`}>
              {tab.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Header
