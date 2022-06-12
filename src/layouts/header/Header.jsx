import InputSearch from './InputSearch'
import Feature from './Feature'

const Header = () => {
  const style = {
    boxShadow: '0px 1px 1px rgb(0 0 0 / 12%)'
  }
  return (
    <div
      id='header-main'
      className='w-full h-[60px] flex items-center justify-around'
      style={style}>
      <div className='w-full max-w-6xl h-[60px] flex justify-between items-center fixed top-0'>
        <img className='h-full' src={require('@/assets/img/logo.png')} alt='logo' />
        <InputSearch />
        <Feature />
      </div>
    </div>
  )
}

export default Header
