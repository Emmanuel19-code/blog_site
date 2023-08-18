'use client'
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"


const Carousel = () => {
    const images =[
        {
            src:"/assets/Image8.jpg"
        },
         {
            src:"/assets/Image9.jpg"
        },
         {
            src:"/assets/Image10.jpg"
        },
         {
            src:"/assets/Image11.jpg"
        }
    ]
    const [currentIndex,setCurrentIndex] = useState(0)
    const nextImage = () => {
  setCurrentIndex((currentIndex + 1)%images.length);
};
useEffect(() => {
  const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds

  return () => clearInterval(intervalId);
}, [setInterval(()=>{

},5000)]);
  return (
  <div className="w-full h-96">
   <div id="default-carousel"className="relative w-full border border-gray-300" data-carousel="slide">
    <div className="relative h-56 overflow-hidden  md:h-96">
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image src={images[currentIndex].src} 
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
             width={500}
             height={200}
            alt="..."/>
        </div>
       
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <div className="absolute bottom-1 border-red-300 border left-1">
     <p className="px-2 w-14 font-bold text-center m-1">
        Read
     </p>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
               <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
   </div>
 </div>
  )
}

export default Carousel