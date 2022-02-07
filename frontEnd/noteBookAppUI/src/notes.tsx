import { useState, useEffect } from "react";
import axios from "axios";

function Notes() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/getNotes")
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
                    <li>title : {item.title}</li>
                    <li>authorId : {item.authorId}</li>
                    <li>authorName : {item.authorName}</li>
                    <li>email : {item.email}</li>
                    <li>
                        <ul>
                      {item.tags.map((item: any, index: any) => {
                          console.log({item})
                          return(
                        <div key={index}>
                          <li>{item.name}</li>
                        </div>
                          )
                      })}
                      </ul>
                    </li>
                    <li>place : {item.place}</li>
                    <li>content : {item.content}</li>
                    <li>category : {item.category}</li>
                    <li>status : {item.status}</li>
                    <li></li>
                  </div>
                ))}
              </ul>
            )}
      </div>
    </>
  );
}

export default Notes;
