import { Routes, Route } from "react-router-dom";
import "./index.css";

// import Nav from "./components/Nav";
// import Footer from "./components/Footer";

import Profil from "./pages/Profil";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
