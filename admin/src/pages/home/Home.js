import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import "./home.scss";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Home = () => {
  const MONTHS = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/stats", {
          headers: {
            token:
              " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzgyMjQyNCwiZXhwIjoxNjU0MjU0NDI0fQ.pucaFFpe2YjTMFYM4KGOb0QB_0O3aW-rcUXmKFY0rmI",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserState((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <section className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* Widget component */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        {/* Chart component */}
        <div className="charts">
          <Featured />
          <Chart
            data={userState}
            title="User Analytics"
            dataKey="New User"
            aspect={2 / 1}
            grid
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Home;
