import axios from "axios";

const GetSingleReq=async (searchWord:any,getSingleApi:any)=>{
    const responseData=await axios
    .get(`http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/${getSingleApi}`, { params: { title: searchWord } })
    return(responseData)
}
export default GetSingleReq