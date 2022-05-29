import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState([]);

  // console.log(lists);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        // ${type ? "?type=" + type : ""} &${
        //   genre ? "&genre=" + genre : ""
        // }
        const res = await axios.get(`http://localhost:5000/api/lists`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ0NzcyMywiZXhwIjoxNjUyODc5NzIzfQ.KqCfhHt5pn5aAhcI_GMHX2PfoniNDEJ4F5RnJx5LlKQ",
          },
        });
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <main>
        <Featured type={type} />
        {lists.map((list) => (
          <List key={list._id} list={list}></List>
        ))}
      </main>
    </div>
  );
};

export default Home;
