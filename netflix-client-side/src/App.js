import { Route, Routes, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Watch from "./Pages/Watch/Watch";

function App() {
  const user = true;
  return (
    <Routes>
      <Route exact path="/" element={user ? <Home /> : <Register />}></Route>
      <Route path="/movies" element={<Home type="short film" />}></Route>
      <Route path="/series" element={<Home type="series" />}></Route>
      <Route path="/watch" element={<Watch />}></Route>
    </Routes>
  );
}

export default App;
