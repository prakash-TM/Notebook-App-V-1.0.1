import axios from "axios";

const GetAllReq=async (getAllApi:any)=>{
    const responseData=await axios
    .get(`http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/${getAllApi}`)
    return(responseData)
}
export default GetAllReq