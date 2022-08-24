import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export const InsertUsers = () => {
  const [data, setData] = useState<
    { _id: string; name: string; age: string }[]
  >([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userAge, setUserAge] = useState<string>("");

  // const search = useParams();

  const getUsers = (searchValue: string) => {
    axios
      .get(`http://localhost:3010/users` + window.location.search)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    getUsers(searchValue);
  }, [searchValue]);

  const sendRequestHandler = () => {
    if (window.location.search === "") {
      window.location.search += "search=" + searchValue;
    } else {
      if (window.location.search.includes("search")) {
        window.location.search = "search=" + searchValue;
      } else window.location.search += "&" + "search=" + searchValue;
    }
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const ageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.currentTarget.value);
  };

  // ==== REQUESTS ====
  const updateRequest = (userID: string) => {
    axios
      .put(`http://localhost:3010/users/${userID}`, { name: "Max", age: 15 })
      .then((response) => getUsers(searchValue));
  };

  const addUserRequest = () => {
    axios
      .post("http://localhost:3010/users", { name: userName, age: userAge })
      .then((response) => getUsers(searchValue));
  };

  const deleteRequest = (userID: string) => {
    axios
      .delete(`http://localhost:3010/users/${userID}`)
      .then((response) => getUsers(searchValue));
  };

  return (
    <div>
      <label>Search: </label>
      <input value={searchValue} type="text" onChange={searchHandler} />
      <button onClick={sendRequestHandler}>send</button>
      <hr />
      <form onSubmit={addUserRequest}>
        <label>Name: </label>
        <input value={userName} type="text" onChange={nameHandler} />
        <label>Age: </label>
        <input value={userAge} type="text" onChange={ageHandler} />
        <button>add user</button>
      </form>
      {data ? (
        data.map((user) => (
          <div key={user._id} style={{ margin: "10px" }}>
            <div style={{ display: "inline" }}>
              <b>Name:</b> {user.name}, {user.age}
            </div>
            <button onClick={() => updateRequest(user._id)}>upd</button>
            <button onClick={() => deleteRequest(user._id)}>x</button>
          </div>
        ))
      ) : (
        <div>Users not found</div>
      )}
    </div>
  );
};
