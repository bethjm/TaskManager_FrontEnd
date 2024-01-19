import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import UpdatePage from "./components/UpdatePage";
import ViewAllPage from "./components/ViewAllPage";
import ViewDayPage from "./components/ViewDayPage";

function App() {
  // read
  //working in console 5:01
  fetch("http://localhost:3009/api/tasks")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("inside fetch request");
    })
    .catch((error) => console.error("There be an error:", error));

  //create
  fetch("http://localhost:3009/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));

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
