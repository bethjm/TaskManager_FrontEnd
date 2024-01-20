import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import UpdatePage from "./components/UpdatePage";
import ViewAllPage from "./components/ViewAllPage";
import ViewDayPage from "./components/ViewDayPage";
import AddTaskPage from "./components/AddTaskPage";

import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <h1>hi from app</h1>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/api/tasks/:id/update" element={<UpdatePage />} />
            <Route path="/api/tasks/addnew" element={<AddTaskPage />} />
            <Route path="/api/tasks/viewday" element={<ViewDayPage />} />
            <Route path="/api/tasks/viewall" element={<ViewAllPage />} />
          </Routes>
        </Router>
      </div>
    </TaskContextProvider>
  );
}

export default App;
