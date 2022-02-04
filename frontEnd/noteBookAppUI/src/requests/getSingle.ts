import axios from "axios";

const GetSingleReq=async (searchWord:any,getSingleApi:any)=>{
    const responseData=await axios
    .get(`http://localhost:8000/${getSingleApi}`, { params: { title: searchWord } })
    return(responseData)
}
export default GetSingleReq