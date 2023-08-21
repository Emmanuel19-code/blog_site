import { useState,useEffect } from "react"
import Blog from "../components/components/Blog"
import { getSpecifiedCategory } from "../api/gettingData"
import DataFetchingError from "../components/components/DataFetchingError"


const ArtPage = () => {
  const [data, setData] = useState()
  const [error,setError] = useState()
  useEffect(()=>{
     getdata()
  },[])
  const getdata = async ()=>{
    try {
      const response = await getSpecifiedCategory("art")
    setData(response)
    } catch (error) {
      setError(error)
    }
  }
  if(!data) return <DataFetchingError/>
  return (
    <div className='flex  justify-center items-center flex-col'>
         <div className="">
         {
            data.map((items)=>(
               <Blog key={items.id}
                title={items.title}
                content={items.content}
                image={items.image}
                id={items.id}
               />
            ))
         }
       </div>
    </div>
  )
}


export default ArtPage