import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import TrackListPage from "./pages/TrackListPage";
import ContactPage from "./pages/ContactPage";
import TrackDetails from "./pages/TrackDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/track" element={<TrackListPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/details/:idTrack" element={<TrackDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
