import Header from './notification/Header'
import Item from './notification/Item'

const Notification = () => {
  const style = {
    boxShadow: 'rgb(0 0 0 / 12%) 0px -4px 32px'
  }
  const notifications = [
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D'
    },
    {
      avatars: [
        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/6976128877269614594.jpeg?x-expires=1651680000&x-signature=YYC5fPL%2FvDGyk6aEBlNwthDH1dI%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    },
    {
      avatars: [
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D',
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
      ],
      title: 'namaenaen, vuquoclua11 and 3 others',
      description: 'liked your video. 3-16',
      image:
        'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665269959402498.jpeg?x-expires=1651680000&x-signature=r6t6YXzBI2QqEwVFhuZKB2d8emE%3D'
    }
  ]
  return (
    <>
      <span className='material-icons-outlined '>notifications</span>
      <div
        className='absolute top-[45px] right-[-66px] w-[390px] pl-4 z-10 rounded-md transition-all delay-300 text-sm'
        style={style}>
        <Header />
        <div className='overflow-scroll h-[500px]'>
          <p className='text-gray-500 mb-2'>Previous</p>
          {notifications.map((notification, index) => {
            return <Item key={index} {...notification} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notification
