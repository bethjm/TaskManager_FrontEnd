import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MainPage from "./components/MainPage";
import UpdatePage from "./components/UpdatePage";
import ViewAllPage from "./components/ViewAllPage";
import ViewDayPage from "./components/ViewDayPage";

function App() {
  return (
    <div className="App">
      <h1>hi from app</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tasks/:id/update" element={<UpdatePage />} />
          <Route path="/viewday" element={<ViewDayPage />} />
          <Route path="/viewall" element={<ViewAllPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
