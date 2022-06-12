const Item = ({ avatars, title, description, image }) => {
  const style = {
    flex: '0 0 48px'
  }
  return (
    <div className='flex items-center justify-center mb-3'>
      <div className='relative w-12 h-12 mr-4' style={style}>
        {avatars.map((avatar, index) => {
          return (
            <img
              key={index}
              src={avatar}
              alt='avatar'
              className='rounded-full w-9 h-9 absolute last-of-type:bottom-0 first-of-type:right-0'
            />
          )
        })}
      </div>
      <div className='title'>
        <p>{title}</p>
        <p className='font-thin text-gray-600'>{description}</p>
      </div>
      <img className='w-12 mx-2' src={image} alt='thumbnail' />
    </div>
  )
}

export default Item
