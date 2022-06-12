import Notification from './features/Notification'
import Account from './features/Account'
import MoreFeature from './features/MoreFeature'
import Button from '@/components/common/Button'

const Feature = () => {
  const isLogin = false

  return (
    <div id='header-feature' className='flex items-center justify-center gap-5 relative z-10'>
      <span className='material-icons-outlined'>cloud_upload</span>
      {isLogin ? (
        <>
          <span className='material-icons'>send</span>
          <Notification />
          <Account />
        </>
      ) : (
        <>
          <Button label='Login' icon='login' />
          <MoreFeature />
        </>
      )}
    </div>
  )
}

export default Feature
