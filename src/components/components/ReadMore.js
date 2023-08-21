import OtherPost from '../components/OtherPost'

const ReadMore = ({time,content,title,writer}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex'>
             <div className='m-2 md:w-4/5 border p-1'>
                <img src="/assets/Image1.jpg" alt="" className='w-full h-72'/>
                <div className='mt-2 flex items-center'>
                  {/*Profile picture*/}
                    <img src="/assets/Image8.jpg" alt="" className='w-14 h-14 rounded-full'/>
                    <div className='ml-2'>
                        <p className='font-bold'>John Doe</p>
                        <p className="text-sm font-semibold">
                          Posted an Hour ago
                       </p>
                    </div>
                </div>
                <h2 className='mt-3 font-bold text-2xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </h2>
                <p className='mt-2 w-full'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Accusantium reprehenderit dolorem doloribus corrupti voluptate ullam, dolor doloremque reiciendis! 
                  Rerum quidem esse a reiciendis at facere quis sed repellendus inventore iste.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Dicta nostrum blanditiis perspiciatis ad laudantium doloribus dolorum necessitatibus quas. 
                  Id nemo sequi ex provident consequuntur amet, quo laudantium debitis voluptates odit!
                </p>
            </div>
            <OtherPost/>
        </div>
     </div>
  )
}

export default ReadMore