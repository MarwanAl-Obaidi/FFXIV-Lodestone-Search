import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterSearch from "./pages/CharacterSearch";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="CharacterSearch" element={<CharacterSearch />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
