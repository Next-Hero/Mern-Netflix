import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
