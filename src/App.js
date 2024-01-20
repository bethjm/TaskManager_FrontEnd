import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import ViewAllPage from "./components/ViewAllPage";
import ViewDayPage from "./components/ViewDayPage";
import AddTaskPage from "./components/AddTaskPage";

import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ViewAllPage />} />
            <Route path="/api/tasks/addnew" element={<AddTaskPage />} />
            <Route path="/api/tasks/viewday" element={<ViewDayPage />} />
          </Routes>
        </Router>
      </div>
    </TaskContextProvider>
  );
}

export default App;
