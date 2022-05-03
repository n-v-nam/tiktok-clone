import Notification from './features/Notification'
import Account from './features/Account'

const Feature = () => {
  return (
    <div id='header-feature' className='flex items-center justify-center gap-5 relative'>
      <span className='material-icons-outlined'>cloud_upload</span>
      <span className='material-icons'>send</span>
      <Notification />
      <Account />
    </div>
  )
}

export default Feature
