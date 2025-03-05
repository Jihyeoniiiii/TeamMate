import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreationPage from  "./pages/ProjectCreationPage"
import ProjectDetailPage from  "./pages/ProjectDetailPage"
import Layout from "./layout/Layout";
import ProjectList from "./pages/ProjectList";
import CommunityList from "./pages/CommunityList";
import ScrollToTop from "./components/ScrollToTop";
import CommunityCreationPage from "./pages/CommunityCreationPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import MyPage from "./pages/MyPage";
import ResumeCreationPage from "./pages/ResumeCreationPage";
import PortfolioCreationPage from "./pages/PortfolioCreationPage";
import Resumes from "./pages/Resumes";

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
          <Route path="/community-detail" element={<CommunityDetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/resumes" element={<Resumes/>} />
          <Route path="/mypage/resumes/new" element={<ResumeCreationPage />} />
          <Route path="/mypage/resumes/1/portfolio-creation" element={<PortfolioCreationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
