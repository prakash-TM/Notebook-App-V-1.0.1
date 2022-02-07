import axios from "axios";
const PostReq=async (data:any,postApi:any)=>{
    await axios
    .post(`http://localhost:8000/${postApi}`, data)
}

export default PostReq