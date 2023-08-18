import { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
import { FiX} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar (){
    const [show,setShow] = useState(false);
    return(
        <div className=" w-full p-2 shadow-sm flex items-center md:justify-center cursor-pointer border bg-white border-b-gray-300 sticky top-0 ">
        <div className="md:flex items-center hidden">
             <div className="font-bold mr-10">
                <h4 className="text-2xl">
                    Emma's Blog
                </h4>
            </div>
            <div className="flex items-center mr-1 p-1">
             <ul className="flex items-center">
                <li className="m-2">
                    <Link to={"/art"}>ART</Link>
                </li>
                <li className="m-2">
                    <Link to={"/science"}>SCIENCE</Link>
                </li>
                <li className="m-2">
                    <Link to={"/food"}>FOOD</Link>
                </li>
                <li className="m-2">
                    <a href="/technology">TECHNOLOGY</a>
                </li>
                <li className="m-2">
                    <a href="/movies">MOVIES</a>
                </li>
                <li className="m-2">
                    <a href="/design">DESIGN</a>
                </li>
             </ul>
         </div>
      </div>
      <div className="flex md:hidden p-2">
        {
        show?
        <div className="text-xl"
         onClick={()=>{setShow(false)}}
         >
            <FiX/>
        </div>
          :
       <div className="text-xl"
         onClick={()=>{setShow(true)}}
         >
            <AiOutlineMenu/>
        </div>
        }
      </div>
      {
        show && 
        <div className="absolute top-12 md:hidden">
           <div id="dropdown" class=" bg-white divide-y mt-2 divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                <li onClick={()=>{setShow(false)}}>
                     <a href="/art" class="block px-4 py-2 hover:bg-gray-100 ">
                        Art
                     </a>
                </li>
                  <li onClick={()=>{setShow(false)}}>
                     <a href="/science" class="block px-4 py-2 hover:bg-gray-100 ">
                        Science
                     </a>
                </li>
              <li onClick={()=>{setShow(false)}}>
                <a href="/food" class="block px-4 py-2 hover:bg-gray-100 ">
                        Food
                     </a>
             </li>
              <li onClick={()=>{setShow(false)}}>
                 <a href="/technology" class="block px-4 py-2 hover:bg-gray-100 ">
                        Technology
                 </a>
             </li>
               <li onClick={()=>{setShow(false)}}>
                 <a href="/movies" class="block px-4 py-2 hover:bg-gray-100 ">
                       Movies
                 </a>
             </li>
               <li onClick={()=>{setShow(false)}}>
                 <a href="/design" class="block px-4 py-2 hover:bg-gray-100 ">
                        Design
                 </a>
             </li>
         </ul>
          </div>
       </div> 
      }
    </div>
    )
}

