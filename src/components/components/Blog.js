

const Blog = ({title,content,id}) => {
  return (
    <div className='flex justify-center'>
        <div className="md:flex md:w-4/5 m-3 p-4 justify-center ">
                <div className='m-3'>
                   <h2 className='font-bold text-3xl m-1'>Colorfull Modernizes Herman Miller's</h2>
                   <p className='md:w-96 m-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum reiciendis unde assumenda. 
                    Porro, sint neque tempore in dicta eveniet quaerat praesentium inventore magni at delectus illo iusto eos voluptas a?
                   </p>
                   <p 
                   className='border text-white bg-teal-600 text-center w-24 p-1 m-2 cursor-pointer'
                   >
                     <a href='/readMore'>Read More</a>
                   </p>
                </div>
                <img src='/assets/Image1.jpg' className='w-96 h-96 m-2'/>
        </div>
    </div>
  )
}

export default Blog