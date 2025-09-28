import Context from "./index";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContactApi } from "../../api";

const ContactProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      await axios.get(`${ContactApi}`).then((resp) => {
        setUsers(resp.data);
      });
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [setUsers, setData]);

  const createUser = (data1, imgUrl) => {
    const userTemp = {
      id: users.length + 1,
      avatar: ("user/user.png"),
      name: data1.name,
      surname: data1.surname,
      email: data1.email,
      mobile: data1.mobile,
    };
    setUsers((pre) => [...pre, userTemp]);
  };

  const editUser = (data, imgUrl, id) => {
    const userTemp = {
      id: users.length + 1,
      avatar: imgUrl,
      name: data.name,
      surname: data.surname,
      email: data.email,
      age: data.age,
      mobile: data.mobile,
    };
    setData((prev) => [...prev, userTemp]);
    getUsers();
  };

  const deletedUser = (id) => {
    const updatedUsers = users.filter((user) => user.id!== id);
    setUsers(updatedUsers);
};

  return (
    <Context.Provider
      value={{
        ...props,
        users,
        data,
        createUser: createUser,
        editUser: editUser,
        deletedUser: deletedUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContactProvider;
