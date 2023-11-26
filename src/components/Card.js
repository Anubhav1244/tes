import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Card=(props)=>{

    let reviews=props.reviews;
    return(
        <div className="flex flex-col md:relative ">
            <div className="absolute top-[-7rem] mx-auto z-[10]">
                <img src={reviews.image} className="aspect-square h-[140px] w-[140px] rounded-full z-[20]"></img>
                <div className="bg-violet-500 rounded-full h-[140px] w-[140px] left-[10px] top-[-6px] z-[-10] absolute"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{reviews.name}</p>
                <p className="text-slate-500 capitalize text-sm">{reviews.job}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-10">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-cneter mt-4 px-2 py-2 text-slate-500">
                <p>{reviews.text}</p>
            </div>
            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight></FaQuoteRight>
            </div>
        </div>
    )
}
export default Card;