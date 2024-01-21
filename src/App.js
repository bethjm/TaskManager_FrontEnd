import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ViewAllPage from "./components/ViewAllPage";
import ViewDayPage from "./components/ViewDayPage";
import AddTaskPage from "./components/AddTaskPage";
import NavBar from "./components/UI/navbar/NavBar";

import { TaskContextProvider } from "./context/TaskContext";

function App() {
  const [showNavBar, setShowNavBar] = useState(true);

  return (
    <TaskContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ViewAllPage />} />
            <Route
              path="/api/tasks/addnew"
              element={<AddTaskPage setShowNavBar={setShowNavBar} />}
            />
            <Route path="/api/tasks/viewday" element={<ViewDayPage />} />
          </Routes>
        </Router>
        {showNavBar && <NavBar />}
      </div>
    </TaskContextProvider>
  );
}

export default App;
