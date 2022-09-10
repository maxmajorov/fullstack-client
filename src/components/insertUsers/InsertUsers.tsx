import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import classes from "./InsertUsers.module.scss";
import { CreateUserFormModal } from "./createUserForm/CreateUserForm";
import { stringify } from "querystring";

// import { useParams } from "react-router-dom";

export const InsertUsers = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState([
    {
      _id: "",
      firstName: "",
      lastName: "",
      age: "",
      phone: "",
      email: "",
      country: "",
      city: "",
      street: "",
    },
  ]);

  console.log(userData);

  // const search = useParams();

  const getUsers = (searchValue: string) => {
    axios
      .get(`http://localhost:3010/users` + window.location.search)
      .then((response) => {
        setUserData(response.data);
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

  // ==== REQUESTS ====
  const updateRequest = (userID: string) => {
    axios
      .put(`http://localhost:3010/users/${userID}`, { name: "Max", age: 15 })
      .then((response) => getUsers(searchValue));
  };

  const addUserRequest = (newUser: UserType) => {
    axios
      .post("http://localhost:3010/users", newUser)
      .then((response) => getUsers(searchValue));
  };

  const deleteRequest = (userID: string) => {
    axios
      .delete(`http://localhost:3010/users/${userID}`)
      .then((response) => getUsers(searchValue));
  };

  return (
    <div className={classes.usersContainer}>
      <>
        <label>Search: </label>
        <input value={searchValue} type="text" onChange={searchHandler} />
        <button onClick={sendRequestHandler}>send</button>
        <button onClick={() => setOpen(!open)}>Add user</button>
      </>

      <hr />

      {userData ? (
        userData.map((user) => (
          <div key={user._id} style={{ margin: "10px" }}>
            <div style={{ display: "inline" }}>
              <b>First name:</b> {user.firstName}, {user.age}
            </div>
            <div style={{ display: "inline" }}>
              <b>Last name:</b> {user.lastName}
            </div>
            <button onClick={() => updateRequest(user._id)}>upd</button>
            <button onClick={() => deleteRequest(user._id)}>x</button>
          </div>
        ))
      ) : (
        <div>Users not found</div>
      )}

      <CreateUserFormModal
        active={open}
        setActive={setOpen}
        // setUserData={setUserData}
        addUserRequest={addUserRequest}
      />
    </div>
  );
};

// ==== TYPES ====

export type UserType = {
  firstName: string;
  lastName: string;
  age?: string;
  phone?: string;
  email?: string;
  country: string;
  city?: string;
  street?: string;
};
