import "./styles.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login";
import Post from "./Pages/Posts";

export default function App() {
  return <div className="App">
    <Home />
    <Routes>
      <Route path="/" element={<Login></Login>} ></Route>
      <Route path="/posts/" element={<Post />} ></Route>

    </Routes>

  </div>;
}
