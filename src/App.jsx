import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreationPage from  "./pages/ProjectCreationPage"
import ProjectDetailPage from  "./pages/ProjectDetailPage"
import Layout from "./layout/Layout";
import ProjectList from "./pages/ProjectList";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/project-creation" element={<ProjectCreationPage />} />
          <Route path="/project-detail" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   ); 
}

export default App
