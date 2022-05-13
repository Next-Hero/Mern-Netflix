import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        height="100%"
        src="https://wallpaperaccess.com/full/231109.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
