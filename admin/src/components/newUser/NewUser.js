import React from "react";
import { MdVisibility } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import "./newUser.scss";

const NewUser = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users?new=true",
          {
            headers: {
              token:
                " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
            },
          }
        );
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="newUser">
      <span className="newUserTitle">New Join Members</span>
      <ul className="newUserList">
        {newUsers.map((user) => (
          <li className="newUserListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="newUserImg"
            />
            <div className="newUserUser">
              <span className="newUserUsername">{user.username}</span>
            </div>
            <button className="newUserButton">
              <MdVisibility className="newUserIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewUser;
