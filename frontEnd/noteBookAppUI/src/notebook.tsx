import "./notebook.css";
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Notebook() {
  const [posts, setPosts] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [id, setID] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes, setDeleteRes] = useState([]);

  const _handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const _handleDes = (e: any) => {
    setDes(e.target.value);
  };
  const _handleID = (e: any) => {
    setID(e.target.value);
  };

  const _handleSearch = (e: any) => {
    setSearchWord(e.target.value);
  };
  const _handleDelete = (e: any) => {
    setDeleteWord(e.target.value);
  };

  const _handleBtn = () => {
    console.log(title, des, id);

    const data = {
      title: title,
      description: des,
      userId: id,
    };
    axios
      .post("http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/notebook", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("record is updated successfully & refresh the once");
  };

  const _handleOut = () => {
    axios
      .get("http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/getNotebook")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _handleGetBtn = () => {
    const url = "http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/getSingleNotebook";
    axios
      .get(url, { params: { title: searchWord } })
      .then((res) => {
        console.log(res.data);
        setSingleData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const _handleDeleteOut = () => {
    axios
      .delete("http://ec2-13-232-172-209.ap-south-1.compute.amazonaws.com:8000/removeSingleNotebook", {
        params: { title: deleteWord },
      })
      .then((res) => {
        console.log(res.data.message);
        setDeleteRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("records was deleted successfully & refresh the once");
  };

  return (
    <div className="bg-color">
      <div className="header-sty">
        <h2>Notebook App</h2>
      </div>
      <div>
        <ul className="unOrder-style">
          <li>
            <label htmlFor="title">Title </label>
            <input
              style={{ marginLeft: "51px" }}
              type="text"
              onChange={_handleTitle}
            />
          </li>
          <li>
            <label htmlFor="description">Description </label>
            <input type="text" onChange={_handleDes} />
          </li>
          <li>
            <label htmlFor="userId">UserID </label>
            <input
              style={{ marginLeft: "33px" }}
              type="text"
              onChange={_handleID}
            />
          </li>
          <br />
          <li>
            <button onClick={_handleBtn}>Submit</button>
          </li>
        </ul>
      </div>
      <br />
      <div className="singleData-flex">
        <div>
          <ul className="unOrder-style">
            <li>
              <label htmlFor="search word">Enter the title for search</label>
              <input
                style={{ marginLeft: "20px" }}
                type="text"
                onChange={_handleSearch}
              />
            </li>
            <br />
            <li>
              <button onClick={_handleGetBtn}>Get single data</button>
            </li>
          </ul>
        </div>

        <div className="singleData-box">
          {singleData.map((item: any, index: any) => (
            <div style={{ padding: "0 15px" }} key={index}>
              <h3>title : {item.title}</h3>
              <p>description : {item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ul className="unOrder-style">
          <li>
            <label htmlFor="delete word">Enter the title for delete</label>
            <input style={{ marginLeft: "22px" }} type="text" onChange={_handleDelete} />
          </li>
          <br />
          <li>
            <button onClick={_handleDeleteOut}>delete data</button>
          </li>
        </ul>
      </div>
      <div>
      <div style={{textAlign:"center"}}>
        <button onClick={_handleOut}>get All Out</button>
      </div>

      <div className="posts-box">
        {posts.map((item: any, index: any) => (
          <div key={index}>
            <h3>title : {item.title}</h3>
            <p>description : {item.description}</p>
          </div>
        ))}
      </div>

      </div>
      
      {/* {handleData(posts)} */}
    </div>
  );
}

export default Notebook;
