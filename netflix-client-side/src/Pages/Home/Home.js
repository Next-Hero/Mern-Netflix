import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Featured />
        <List />
      </main>
    </div>
  );
};

export default Home;
