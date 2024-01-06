import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <h2>داستان برنامه نویس شدنت از اینجا شروع میشه!</h2>
          <p>
          یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید، بقیه‌اش با  استاد شو
          </p>
          <div>
            <Link href="#" >
            <span>شروع یادگیری برنامه نویسی</span>
            </Link>
            <Link  href="#">
            <span>درباره تیم استادشو</span>
            </Link>
          </div>

<div>
  <div>
    <span></span>
    </div>
  <div>
  <span></span>
  </div>
  <div>
  <span></span>
  </div>
  <div>
  <span></span>
  </div>
</div>

        </div>
        <div>
          <Image src="/images/header-image.png" width={400} height={400} alt='main header image'  className='w-auto'/>
        </div>
      </div>
    </main>
  )
}
