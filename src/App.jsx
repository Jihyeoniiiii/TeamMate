import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreationPage from  "./pages/ProjectCreationPage"
import ProjectDetailPage from  "./pages/ProjectDetailPage"

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-creation" element={<ProjectCreationPage />} />
        <Route path="/project-detail" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
   ); 
}

export default App
