const InputSearch = () => {
  return (
    <form className='h-[46px] w-[361px] bg-gray-100 rounded-[92px] flex items-center justify-between overflow-hidden'>
      <input
        placeholder='Search accounts and videos'
        className='w-full bg-transparent outline-none my-2 py-1 px-4 border-r-2'
      />
      <span className='material-icons border-gray-300 px-2 py-[20px] text-gray-400 cursor-pointer hover:bg-gray-300'>
        search
      </span>
    </form>
  )
}

export default InputSearch
