import React from "react";
import {MdOutlineLocationOn} from "react-icons/md";
import {IoMdTime} from "react-icons/io";
import {FiPhoneCall} from "react-icons/fi";
const Location = () => {
  return (
    <div class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 h-auto justify-between">
      <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.3794406632859!2d127.74496186301897!3d37.87215355212534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3562e5bd56348d2f%3A0x87693adb5f14d511!2z7JWM652865SYIGFsYWRkaW4!5e0!3m2!1sen!2skr!4v1676982131749!5m2!1sen!2skr" width="384" height="300"
       > </iframe>
       
       </div >
       <p class="text-white gap-4 font-semibold pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col" > <MdOutlineLocationOn 
        class=""/> 강원도 춘천시 서부대성로 245 지하 1층 <br />Gangwon-do, Chuncheon-si, Seobudaeseong-ro, 245 지하 1층 </p>
        <p class="text-white gap-4 font-semibold pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col" > <IoMdTime
        class=""/>10AM to 11PM <br />Monday - saturday  </p>
        <p class="text-white gap-4 font-semibold pt-6 md:p-8 text-center md:text-left space-y-4 flex flex-col" > <FiPhoneCall 
        class=""/> 0339100366 <br /> 010332353325</p>
       
    </div>
    
  )
}

export default Location