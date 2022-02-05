import axios from "axios";

const DeleteAllReq=async (deleteAllApi:any)=>{
    const responseData=await axios
    .delete(`http://localhost:8000/${deleteAllApi}`)
    return(responseData)
}
export default DeleteAllReq