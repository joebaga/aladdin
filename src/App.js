import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer, Location,GoMenuBar} from "./components";

import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{foodItems}, dispatch]= useStateValue();

  const fetchData = async () => {
    await getAllFoodItems() .then (data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    });
  };
useEffect(() =>{fetchData()},[])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-warning px-2 py-6">
      <Header/>
      <main className="mt-16 md:mt-24 px-4 md:px-14 py-2 w-full"> 
          <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="/GoMenuBar" element={<GoMenuBar/>}/>
          </Routes> 


      </main>
    </div>
    </AnimatePresence>
     
    );
  
};

export default App;
