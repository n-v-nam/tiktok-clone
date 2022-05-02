import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='error-page'>
      Trang không được tìm thấy
      <Link to='/'>Trang chủ</Link>
    </div>
  )
}

export default ErrorPage
