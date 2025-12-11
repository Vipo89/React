import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateStudentPage from "./pages/CreateStudentPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CreateStudentPage/>}/>
          <Route path="/details/:idStudent" element={<StudentDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
