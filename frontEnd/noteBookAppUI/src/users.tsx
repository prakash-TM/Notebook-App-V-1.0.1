import { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/getUser")
      .then((res) => {
        setLoading(false);
        if (res.data) {
          console.log(res.data);
          setPosts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading
          ? "Loading"
          : posts &&
            posts.length && (
              <ul>
                {posts.map((item: any, index: any) => (
                  <div key={index}>
                    <li>userName : {item.userName}</li>
                    <li>name : {item.name}</li>
                    <li>email : {item.email}</li>
                    <li>jobDetails : </li>
                    <li>title : {item.jobDetails.title}</li>
                    <li>designation : {item.jobDetails.designation}</li>
                    <li>organization : {item.jobDetails.organization}</li>
                    {/* <li>
                      {item.jobDetails.map((item: any, index: any) => {
                        <div key={index}>
                          <ul>
                              <li>{item.title}</li>
                              <li>{item.designation}</li>
                              <li>{item.organization}</li>
                        </ul>
                        </div>;
                      })}
                    </li> */}
                    <li>contactNumber : {item.contactNumber}</li>
                    <li>dob : {item.dob}</li>
                    <li>gender : {item.gender}</li>
                    <li></li>
                  </div>
                ))}
              </ul>
            )}
      </div>
    </>
  );
}

export default User;
