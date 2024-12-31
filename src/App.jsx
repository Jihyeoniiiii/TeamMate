import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreationPage from  "./pages/ProjectCreationPage"
import ProjectDetailPage from  "./pages/ProjectDetailPage"
import Layout from "./layout/Layout";
import ProjectList from "./pages/ProjectList";
import CommunityList from "./pages/CommunityList";
import ScrollToTop from "./components/ScrollToTop";
import CommunityCreationPage from "./pages/CommunityCreationPage";

function App() { 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/project-creation" element={<ProjectCreationPage />} />
          <Route path="/project-detail" element={<ProjectDetailPage />} />
          <Route path="/community" element={<CommunityList />} />
          <Route path="/community-creation" element={<CommunityCreationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
