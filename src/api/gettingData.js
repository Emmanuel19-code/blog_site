import axios from "./axios"


const getHomeData = async()=>{
    let errormessage,data=""
    await axios.get("/content/getAllcontent")
    .then((response)=>{
        data=response.data.content;
    })
    .catch((error)=>{
       errormessage = error.response.data.msg
       console.log(errormessage);
    })
    return data
}

const getSpecifiedContent = async (id)=>{
    let errormessage,data=""
    await axios.get(`/content/getContent:${id}`)
    .then((response)=>{
        data=response.data.content;
    })
    .catch((error)=>{
        errormessage = error.response.data.msg
    })
}

const getSpecifiedCategory = async (name)=>{
    let errormessage,data=""
    await axios.get(`/content/getCategoryContent:${name}`)
    .then((response)=>{
        data=response.data.content;
        console.log(data);
    })
    .catch((error)=>{
       errormessage = error.response.data.msg
    })
  return data
}

export{
    getHomeData,
    getSpecifiedCategory,
    getSpecifiedContent
}