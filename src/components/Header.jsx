import React from "react";
import {motion} from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase.config";
import Logo from "../img/aladdinlogo.png";
import {MdShoppingCart, MdAdd, MdLogout, MdLocationPin} from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "./img/avatar.png";
import { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    
    const provider =  new GoogleAuthProvider();
     

    const[{user,cartShow, cartItems}, dispatch] =useStateValue();

    const [isMenu, setIsMenu ] = useState(false);


    const login = async () => {
      if(!user){
        const {
          user : {refreshToken, providerData},
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: actionType.SET_USER,
          user : providerData[0],
        });
  
        localStorage.setItem("user", JSON.stringify(providerData[0]));
      } else{
        setIsMenu(!isMenu);
      }
    };

    const logout = () => {
      setIsMenu(false);
      localStorage.clear();

      dispatch ({
        type : actionType.SET_USER,
        user : null
      });
    };
    const showCart = () => {

      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow : !cartShow,
      });

    }
   
  return (
    <header className="fixed z-50 w-screen top-0 left-0 px-2 md:p-6 md:px-16  bg-warning ">
      {/* desktop*/}
      {/* logo */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
       <Link to={"/"}className=" flex items-center gap-1">
         <img src={Logo} className="w-8 object-cover " alt="aladdinlogo" />
         <p className=" text-headingColor text-xl font-bold">Aladdin restaurant</p> 
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
          initial={{opacity:0, x: 100 }} 
          animate={{opacity:1, x: 0 }}
          exit={{opacity:0, x: 100 }}
          
          className=" flex items-center gap-8 ml-auto">
           <Link to={"/"}><li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" >Home</li></Link>
           <Link to={"/GoMenuBar"}><li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li></Link>
           <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About us</li>
           <Link to={"/Location"}><li  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer flex gap-2"><MdLocationPin />Locations  </li> </Link >
         </motion.ul>

         <div className="relative flex items-center justify-center" onClick={showCart}>
           <MdShoppingCart  className="text-textColor text-2xl cursor-pointer"/>
          {cartItems && cartItems.length >0 &&(
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-300 flex items-center justify-center">
            <p className="text-sm text-white font-semibold">{cartItems.length}</p>
           </div>
          )}
        </div>
          <div className="relative">
           <motion.img whileTap={{scale: 0.6}} 
           src={user ? user.photoURL : Avatar} className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl items-cente cursor-pointer rounded-full ring-2 ring-gray-300 dark:ring-blue-500" alt="userprofile"
           onClick={login}
            />
            {
              isMenu && (
                <motion.div  
                 initial= {{opacity : 0, scale : 0.6 }}
                 animate= {{opacity : 1, scale : 1 }}
                 exit= {{opacity : 0, scale : 0.6 }}
                 className="w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
               {
                user && user.email === "jlirenge@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() =>setIsMenu(false)}>New Food <MdAdd/></p>
                  </Link>
                )
               }
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
               onClick={logout}
              >Logout <MdLogout/></p>
             </motion.div>
              )
            }
          </div>
          {/* end for mobile */}
        
      </div>

        
      </div>
      {/* mobile*/}
      <div className="flex items-center justify-between md:hidden w-full h-full ">

        <div className="relative flex items-center justify-center" onClick={showCart}>
           <MdShoppingCart  className="text-textColor text-2xl cursor-pointer"/>
           {cartItems && cartItems.length >0 &&(
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-300 flex items-center justify-center">
            <p className="text-sm text-white font-semibold">{cartItems.length}</p>
           </div>
          )}
        </div>
       <Link to={"/"}className=" flex items-center gap-1">
         <img src={Logo} className="w-12 object-cover cursor-pointer " alt="aladdinlogo" />
         <p className="text-headingColor text-ls font-bold"></p>
       
        </Link>
        



        <div className="relative">
           <motion.img whileTap={{scale: 0.6}} 
           src={user ? user.photoURL : Avatar} className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl items-cente cursor-pointer rounded-full ring-2 ring-gray-300 dark:ring-gray-500" alt="userprofile"
           onClick={login}
            />
            {
              isMenu && (
                <motion.div  
                 initial= {{opacity : 0, scale : 0.6 }}
                 animate= {{opacity : 1, scale : 1 }}
                 exit= {{opacity : 0, scale : 0.6 }}
                 className="w-40 bg-white shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
               {
                user && user.email === "jlirenge@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 rounded-md flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base" 
                    onClick={() =>setIsMenu(false)} >New Food <MdAdd/></p>
                  </Link>
                  
                )
               }
               <ul
          
                 className=" flex flex-col ">
                 <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2 "onClick={() =>setIsMenu(false)}>Home </li>       
                 <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() =>setIsMenu(false)}>Menu</li>
                 <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() =>setIsMenu(false)}>About us</li>
                 <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"onClick={() =>setIsMenu(false)}><MdLocationPin />Locations</li>
                </ul>


              <p className=" m-2 p-2 rounded-md flex items-center bg-warning gap-3 cursor-pointer hover:waring-300 transition-all duration-100 ease-in-out text-textColor text-base"
               onClick={logout}
              >Logout <MdLogout/></p>
             </motion.div>
              )
            }
          </div>
         


      </div>
    </header>
  )
}

export default Header;