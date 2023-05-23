import React from 'react';
import Logo from "../img/logo.png";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from '../utils/data';
import QRCode from "qrcode.react";
import {FaWonSign} from "react-icons/fa"
import { useStateValue } from '../context/StateProvider';





const HomeContainer = () => {
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen " id="home">
      <div className="py-2 flex-1">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          <div className="flex items-center gap-2 justify-center bg-yellow-500 px-4 py-1 rounded-full">
            <p className="text-base text-white font-semibold">delivery <br /><a href="https://www.baemin.com/"> 배달 민족</a></p>
            
            
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl" >
            <img src={Delivery} className="w-full h-full object-contain" alt="delivery" />

            </div>
          </div>
        </div>
        {/* trail */}
        
        <p >
          춘천 배달 음식 맛집 <span className="text-white">Best</span>  
          
        </p>
        <p 
        
        className=" text-[2.5rem] lg:text-[3rem] font-bold tracking-wide">we serve the best Halal food in 
        <span className="text-purple-200 text-[2.5rem] lg:text-[3rem]]" > chuncheon
            </span>
            
            </p>
        <p className="text-base text-textColor flex flex-col items-center justify-between text-center md:text-left md:w-[80%] gap-2">
        Looking for a thick and hearty fast food? Then look no further! at aladdin restaurant Enjoy it with their cheese steak fries, and more 
         <br /> Aladdin’s Burger is Beef 100% of Handmade Burger
         <br /> 알라딘의 버거는 소고기 100%의 수제버거입니다
         <p className=" text-black px-4 py-2 font-Bold ">QR</p>
        <QRCode className=" w-full md:w-auto px-4 py-2 rounder-none hover:shadow-lg transition-all
        ease-in-out duration-100 " value="https://www.baemin.com/" />
        </p>
        {/*<button type="button" className="bg-gradient-to-br from-yellow-400
         to-yellow-500 w-full md:w-auto px-4 py-2 rounder-lg hover:shadow-lg transition-all
  ease-in-out duration-100" > ORDER NOW</button>*/}

  {/* qr test */}
  
          
      </div>
      <div className="py-2 flex-1 flex items-center relative">
          <img src={HeroBg}
           className="ml-auto h-420 w-full lg:w-auto lg:h-650"
            alt="hero-bg" />

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-2 gap-4 flex-wrap">

            {heroData && heroData.map(n =>(
              <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex-col items-center drop-shadow-lg hover:bg-yellow-500 cursor-pointer">
              <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="" />
              <p className="text-base lg:text-xl font-semibold text-lighttextGray mt-2 lg:mt-4">{n.name}</p>
              <p className="text-[12px] lg:text-sm font-semibold text-textColor my-1 lg:my-3">{n.decp}</p>
              <p className="text-sm font-semibold flex items-center text-lighttextGray">
                <span className="text-xs text-red-600"><FaWonSign className=" flex flex-col items-center justify-center" /> </span> {n.price}</p>
            </div>
            ))}

          </div>

        </div>
      
    </section>
   
    
    
  );
  
  
  
};

export default HomeContainer;
