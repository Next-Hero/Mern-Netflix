import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);
  return (
    <section className="watch">
      <Link to="/">
        <div className="back">
          <MdArrowBack />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie?.video} />
    </section>
  );
}
