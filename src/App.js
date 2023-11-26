import React from "react";
import Testiomonial from './components/Testiomonial';
import reviews from './data';
const App = () => {

  return(
    <div className="flex flex-col bg-slate-100 w-[100vw] h-[100vh] justify-center items-center">
      <div className="text-center">
        <h1 className=" text-4xl font-bold">Our Testiomonial</h1>
       
        <div className="h-[4px] w-[10vw] bg-violet-500 mt-1 mx-auto"></div>
      <div>
        <Testiomonial reviews={reviews}></Testiomonial>
      </div>
      </div>
    </div>
  ) 
};

export default App;
