import "./ListItem.scss";
import {
  MdPlayArrow,
  MdAdd,
  MdThumbUpOffAlt,
  MdThumbDownOffAlt,
} from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  // console.log(item);
  const [isHovered, setIsHovered] = useState(false);

  const [movie, setMovie] = useState({});
  const { img, trailer, duration, limit, year, desc, genre } = movie;
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movies/${item}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmNkZjBmOWY5ODQ1MjU5MzZiZGM4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ0NzcyMywiZXhwIjoxNjUyODc5NzIzfQ.KqCfhHt5pn5aAhcI_GMHX2PfoniNDEJ4F5RnJx5LlKQ",
            },
          }
        );
        setMovie(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={img} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <MdPlayArrow className="icon" />
                <MdAdd className="icon" />
                <MdThumbUpOffAlt className="icon" />
                <MdThumbDownOffAlt className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{duration}</span>
                <span className="limit">+{limit}</span>
                <span>{year}</span>
              </div>
              <div className="desc">{desc}</div>
              <div className="genre">{genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
