import "./App.css";
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { time } from "console";

function Notebook() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [id, setID] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [deleteWord, setDeleteWord] = useState([]);
  const [deleteRes,setDeleteRes]=useState([])

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
      .post("http://localhost:8000/notebook", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      alert("record is updated successfully & refresh the once")
  };

  const _handleOut = () => {
    axios
      .get("http://localhost:8000/getNotebook")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const _handleGetBtn = () => {
    const url = "http://localhost:8000/getSingleNotebook";
    axios
      .get(url, { params: { title: searchWord } })
      .then((res) => {
        console.log(res.data);
        setSingleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const _handleDeleteOut = () => {
    console.log(deleteWord)
    axios
      .delete("http://localhost:8000/removeSingleNotebook", {
        params: { title: deleteWord },
      })
      .then((res) => {
        console.log(res.data.message)
        setDeleteRes(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      alert("records was deleted successfully & refresh the once")
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title </label>
        <input type="text" onChange={_handleTitle} />
        <label htmlFor="description">Description </label>
        <input type="text" onChange={_handleDes} />
        <label htmlFor="userId">UserID </label>
        <input type="text" onChange={_handleID} />
        <button onClick={_handleBtn}>Submit</button>
      </div>
      <label htmlFor="search word">Enter the title for search</label>
      <input type="text" onChange={_handleSearch} />
      <button onClick={_handleGetBtn}>get single data</button>
      <div>
        {singleData.map((item: any, index: any) => (
          <div key={index}>
            <h3>title : {item.title}</h3>
            <p>description : {item.description}</p>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="delete word">Enter the title for delete</label>
        <input type="text" onChange={_handleDelete} />
        <button onClick={_handleDeleteOut}>delete data</button>
      </div>
      <div>
        <button onClick={_handleOut}>get All Out</button>
      </div>

      <div>
        {posts.map((item: any, index: any) => (
          <div key={index}>
            <h3>title : {item.title}</h3>
            <p>description : {item.description}</p>
          </div>
        ))}
      </div>
      {/* {handleData(posts)} */}
    </div>
  );
}

export default Notebook;
