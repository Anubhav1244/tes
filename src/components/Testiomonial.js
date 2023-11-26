import React, { useState } from "react";
import Card from './Card';
import {FaAngleLeft,    FaAngleRight } from "react-icons/fa";
const Testiomonial=(props)=>{
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function lefthandler()
    {
        if(index-1 < 0)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index-1);
        }
    }
    function rightclick()
    {
        if(index+1>reviews.length-1)
        {
            setIndex(0);
        }
        else
        {
            
            console.log(index);

            setIndex(index+1);
        }
    }

    function s()
    {
       let a= Math.floor(Math.random()*reviews.length);
       console.log(a);
       setIndex(a);
    }
    
    return(
        <div className="w-[85vw] md:w-[700px] mt-10 bg-white flex flex-col justify-center hover:shadow-lg  ">
           <div>
            <Card reviews={reviews[index]}></Card>
           </div>
           <div >
                <button onClick={lefthandler} className="text-violet-500 mt-9 text-xl">
                    <FaAngleLeft ></FaAngleLeft>
                </button>
                <button onClick={rightclick} className="text-violet-500 mt-9 text-xl ml-4">
                    <FaAngleRight/>
                </button>
           </div>
           <div >
                <button className="bg-violet-400 w-[10vw] mx-auto px-2 py-2 mt-5 mb-5 rounded-md md:relative bottom-[5] text-white hover:bg-violet-700" onClick={s}>
                    Surprise
                </button>
           </div>
        </div>
       
    )
}
export default Testiomonial;