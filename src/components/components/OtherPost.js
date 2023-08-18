import { Link } from "react-router-dom"

const OtherPost = ({title,id}) => {
  return (
    <div className='m-2 border p-2 hidden md:flex flex-col'>
                <h4 className='font-bold text-lg'>
                    Other Posts You may like
                 </h4>
                 <div className='mt-3'>
                    <img src="/assets/Image2.png" className="w-64 h-64"/>
                    <h3 className='text-lg font-bold mt-2'>
                        Lorem Ipsum World
                     </h3>
                     <p 
                   className='border border-teal-300 text-teal-500 text-center w-24 p-1 mt-2 cursor-pointer'
                   >
                     <Link to={"/readMore"}>
                      Read More
                     </Link>
                   </p>
                 </div>
             </div>
  )
}

export default OtherPost