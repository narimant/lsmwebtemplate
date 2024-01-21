import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { RxPencil2 } from "react-icons/rx";
import { TbRestore } from "react-icons/tb";
const MainHero = () => {
  return (
    <div className="container mx-auto flex justify-between ">
      <div className="basis-8/12 flex flex-col justify-start items-start gap-5 flex-1">
        <h2 className="text-2xl font-bold">
          داستان برنامه نویس شدنت از اینجا شروع میشه!
        </h2>
        <p className="text-lg font-extralight">
          یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته
          باشید، بقیه‌اش با استاد شو
        </p>
        <div className="flex justify-start items-center gap-5">
          <Link
            href="#"
            className="bg-green-500 p-4  text-white rounded-lg flex justify-start items-center gap-4"
          >
            <span>شروع یادگیری برنامه نویسی</span>
            <span>
              <IoIosArrowRoundBack />
            </span>
          </Link>
          <Link
            href="#"
            className="bg-green-600/20 rounded-lg p-4 text-primary"
          >
            <span>درباره تیم استادشو</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 w-full mt-5 font-medium text-lg">
          <div className="flex justify-start items-center gap-2">
            <PiStudent size={25} className="text-red-500"/>
            <span>بیش از 80 دوره آموزش</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FiPhoneCall size={25} className="text-slate-400" />
            <span>ضمانت بازگشت وجه</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <TbRestore size={25} className="text-violet-500"/>

            <span>یادگیری با تمرین و آزمون</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <RxPencil2 size={25} className="text-teal-500"/>
            <span>پشتیبانی 24 ساعته</span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center basis-7/12">
        <Image
          src="/images/header-image.png"
          width={400}
          height={400}
          alt="main header image"
          className="w-8/12 h-auto"
        />
      </div>
    </div>
  );
};

export default MainHero;
