import { Link } from "react-router-dom";
import "./LinkIndex.css"
const LinkIndex=()=>{
    return(
        <div>
             <div className="header">
            <div className="header1">
                <h2>Click here for :</h2>
            <Link className="link" to="/notebook" >NoteBook</Link>
            <Link className="link" to="/notes">Notes</Link>
            <Link className="link" to="users">Users</Link>
            </div>
        </div>
        </div>
    )
}
export default LinkIndex