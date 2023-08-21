import { Link } from "react-router-dom"

const Blog = ({title,content,id,image}) => {
  return (
    <div className='flex justify-center'>
        <div className="md:flex md:w-4/5 m-3 p-4 justify-center ">
                <div className='m-3'>
                   <h2 className='font-bold text-3xl m-1'>{title}</h2>
                   <p className='md:w-96 m-1'>
                    {content}
                   </p>
                   <p 
                   className='border text-white bg-teal-600 text-center w-24 p-1 m-2 cursor-pointer'
                   >
                     <Link to={`/readMore`}>Read More</Link>
                   </p>
                </div>
                <img src={image} alt="" className='w-96 h-96 m-2'/>
        </div>
    </div>
  )
}

export default Blog