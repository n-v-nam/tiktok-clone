import { useState, useEffect, useRef } from 'react'
import Card from '@/components/common/Card'
import Header from './notification/Header'
import Item from './notification/Item'

const Notification = () => {
  const notifications = []
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   },
  //   {
  //     avatars: [
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //     ],
  //     title: 'namaenaen, vuquoclua11 and 3 others',
  //     description: 'liked your video. 3-16',
  //     image:
  //       'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
  //   }
  // ]
  const [status, setStatus] = useState(false)
  const notificationRef = useRef()
  const wrapperRef = useRef()

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
      notificationRef.current &&
      !notificationRef.current.contains(e.target) &&
      !wrapperRef.current.contains(e.target)
    ) {
      setStatus(false)
    }
  }

  const onToggle = () => {
    setStatus(!status)
  }

  return (
    <div ref={wrapperRef}>
      <span className='material-icons-outlined cursor-pointer pt-2' onClick={onToggle}>
        notifications
      </span>
      {status && (
        <Card ref={notificationRef} className='absolute right-0 top-[45px] px-3'>
          <Header />
          <div className='overflow-scroll h-[500px]'>
            {!notifications.length ? (
              <>
                <p className='text-center'>Không có thông báo nào</p>
              </>
            ) : (
              <>
                <p className='text-gray-500 mb-2'>Previous</p>
                {notifications.map((notification, index) => {
                  return <Item key={index} {...notification} />
                })}
              </>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}

export default Notification
