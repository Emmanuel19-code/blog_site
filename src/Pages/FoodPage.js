import { useState,useEffect } from "react"
import Blog from "../components/components/Blog"
import { getSpecifiedCategory } from "../api/gettingData"
import DataFetchingError from "../components/components/DataFetchingError"

export const FoodPage = () => {
  const [data, setData] = useState()
   const [error,setError] = useState();
  useEffect(()=>{
      const getdata = async ()=>{
     try {
     const response = await getSpecifiedCategory("food")
        setData(response)
     } catch (error) {
       console.log(error);
     }    
  }
  },[])
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

export default FoodPage