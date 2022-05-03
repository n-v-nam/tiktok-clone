import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='error-page' className='text-center'>
      <p>Trang không được tìm thấy</p>
      <Link to='/' className='mx-2 text-red-600 cursor-pointer hover:text-red-300'>
        Home
      </Link>
    </div>
  )
}

export default ErrorPage
