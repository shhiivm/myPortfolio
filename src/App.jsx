import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjectsPage from "./pages/AllProjectsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
