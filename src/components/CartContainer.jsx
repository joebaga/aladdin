import React from "react";
import { MdOutlineKeyboardBackspace, MdShowChart } from "react-icons/md";
import{RiRefreshFill} from "react-icons/ri";
import { motion } from "framer-motion";
import{BiWon} from "react-icons/bi"
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartContainer = () => {
    const[{cartShow,cartItems}, dispatch] =useStateValue();
     const showCart =() => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow : !cartShow,
          });
     }


  return (
    <motion.div
      inital={{opacity : 0, x :200}}
      animation={{opacity : 1, x :0}}
      exit={{opacity : 0, x :200}}
              
        className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]">
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
            <motion.div whileTap={{scale: 0.75}} onClick={showCart}><MdOutlineKeyboardBackspace className="text-black text-3xl"/>
            
            </motion.div>
            <p className="text-black text-lg font-bold">CART</p>
            <motion.p whileTap={{scale: 0.75}} className="flex items-center gap-2 p-1 px-2 my-2 bg-green-100 rounded-md
            hover:shadow-md curser-pointer text-textColor text-base"

            
            >clear <RiRefreshFill/> 
            {" "}
            </motion.p>

        </div>
{/* bottom section */}
        <div className="w-full h-full bg-cartBg flex flex-col">
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                {/* cart item */}
                {cartItems && cartItems.map(item =>(
                    <div key={item.id} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
                    >
                        <img src={item?.imageUrl}
                           className="w-20 h-20 max-w-[60px] rounded-full object-contain" alt="" />
    
                           {/* name section */}
                           <div className="flex flex-col gap-2">
                            <p className="text-base text-white"> {item?.title}</p>
                            <p className="text-sm block text-white font-bold flex-col"> <BiWon className="flex items-center justify-center"/> {item?.price} </p>
                           </div>
                    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                        <motion.div whileTap={{scale: 0.75}}>
                            <BiMinus className="text-white"/>
    
                        </motion.div>
                        <p className="w-5 h-5 rounded-sm bg-cartBg text-white flex items-center justify-center">{item?.qty} </p>
                        <motion.div whileTap={{scale: 0.75}}>
                            <BiPlus className="text-white"/>
                            
                        </motion.div>
                        </div> 
                    </div>
                ))}
                

            </div>
{/* cart addition */}
           <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-center gap-5
           px-8 py-8">
            <div className="w-full flex items-center justify-between">
                <p className="text-white text-lg">sub Total</p>
                <p className="text-white text-lg">8.7</p>
            </div>
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
                <p className="text-white text-xl font-semibold">Total</p>
                <p className="text-white text-xl font-semibold">5;6</p>
            </div>
            <motion.button whileTap={{scale: 0.8}}
             type="button"
             className="w-full p-2 rounded-full bg-yellow-600 text-white text-lg my-2
             hover:shadow-lg  ">check</motion.button>
           </div>
         </div>
    </motion.div>
  )
}

export default CartContainer