import React, { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovie } from "../../context/movieContext/MovieApiCalls";
import { useParams } from "react-router-dom";

const Single = () => {
  const { movies, dispatch } = useContext(MovieContext);
  const { movieId } = useParams();
  console.log(movieId, movies);
  useEffect(() => {
    getMovie(movieId, dispatch);
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={movies.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{movies.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">id:</span>
                  <span className="itemValue">{movies._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">genre:</span>
                  <span className="itemValue">{movies.genre}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">{movies.year} </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Limit:</span>
                  <span className="itemValue">{movies.limit}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
