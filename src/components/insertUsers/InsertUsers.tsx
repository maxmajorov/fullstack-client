import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import classes from "./InsertUsers.module.scss";
import { CreateUserFormModal } from "./createUserForm/CreateUserForm";
import defaultAva from "../../assets/img/def-image.png";

// import { useParams } from "react-router-dom";

export const InsertUsers = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<Array<UserResponseType>>([]);

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

      {userData.length ? (
        <div className={classes.userList}>
          {userData.map((user) => (
            <div key={user._id} className={classes.userItem}>
              <img src={defaultAva} className={classes.avatar} alt="avatar" />
              <div className={classes.userInfo}>
                <div className={classes.userName}>
                  {user.firstName} {user.lastName}
                </div>
                <div>
                  {user.country}, {user.city}
                </div>
                {user.age && <div>Age: {user.age}</div>}
              </div>
              <div>
                <button onClick={() => updateRequest(user._id)}>upd</button>
                <button onClick={() => deleteRequest(user._id)}>x</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Users not found</div>
      )}

      <CreateUserFormModal
        active={open}
        setActive={setOpen}
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

export type UserResponseType = {
  _id: string;
  firstName: string;
  lastName: string;
  age?: string;
  phone?: string;
  email?: string;
  country: string;
  city?: string;
  street?: string;
};
