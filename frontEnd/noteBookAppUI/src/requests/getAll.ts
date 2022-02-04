import axios from "axios";

const GetAllReq=async (getAllApi:any)=>{
    const responseData=await axios
    .get(`http://localhost:8000/${getAllApi}`)
    return(responseData)
}
export default GetAllReq