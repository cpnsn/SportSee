import { Routes, Route } from "react-router-dom";
import "./index.css";

import Nav from "./components/Nav";

import Profil from "./pages/Profil";

function App() {
  return (
    <div className="App font-[Roboto] flex flex-col">
      <Nav />
      <Routes>
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
