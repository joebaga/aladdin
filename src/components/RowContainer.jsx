import React, { useEffect, useRef, useState } from "react";
import {BsPlusCircle} from "react-icons/bs"
import {BiWon} from "react-icons/bi"
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useSubmit } from "react-router-dom";

const RowContainer = ({flag, data, scrollValue}) => {
  const rowContainer = useRef();
  const [items, setItems] =useState([]);
  const [{cartItems}, dispatch] = useStateValue();
  const addtocart = () => {
    
    dispatch({
    
    type: actionType.SET_CARTITEMS,
    cartItems: items ,
  });
  localStorage.setItem("cartItems", JSON.stringify(items));

   };
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;

  }, [scrollValue]);
  useEffect (()=>{
    addtocart()
  },[items])
    return (

    <div 

    ref={rowContainer}
    className={` w-full flex items-center gap-3 my-8 bg-rowBg scroll-smooth
    ${flag ? "overflow-x-scroll scrollbar-none": "overflow-x-hidden flex-wrap justify-center"}`}>
        {data && data.map((item) =>(
          <div 
          key={item?.id} 
          className="w-275 h-[275px] min-w-[275px] md:w-300 md:min-w[300px] 
           bg-orange-300 py-2 px-4 my-12 shadow-md backdrop-blur-lg hover:drop-shadow-lg
          flex flex-col items-center justify-evenly relative">
          <div className="w-full flex items-center justify-between">
            <motion.div whileHover={{ scale:1.2 }} className="w-40 h-40 -mt-8 drop-shadow-2xl">
            <img  
            src={item?.imageUrl}
            alt="" 
            className="w-full h-full object-contain"
            />
            </motion.div>
            
            <motion.div whileTap={{
              scale:0.75
            }} className="w-8 h-8 rounded-full bg-white flex items-center 
             justify-center curser-pointer hover:shadow-bg" onClick={()=> setItems([...cartItems, item])}> <BsPlusCircle/></motion.div>
          </div>
          <div className="w-full flex flex-col gap-1 items-end justify-end">
             <p className="text-black font-bold text-base md:text-lg">{item?.title} </p>
             <p className="mt-1 text-sm text-gray-500">{item?.calories} </p>
             <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor flex items-center font-semibold"><span className="text-sm text-red-600"> <BiWon/> </span>{item?.price}</p>

             </div>
           </div>
        </div>
        ))}
    </div>
  );
};

export default RowContainer;