import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectCreationPage from  "./pages/ProjectCreationPage"
import ProjectDetailPage from  "./pages/ProjectDetailPage"
import Layout from "./layout/Layout";
import ProjectList from "./pages/ProjectList";
import CommunityList from "./pages/CommunityList";
import ScrollToTop from "./components/ScrollToTop";
import CreationStyle from "./styles/CreationStyle";

function App() { 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/project-creation" element={
            <>
              <CreationStyle /> {/* ProjectCreationPage에만 스타일 적용 */}
              <ProjectCreationPage />
            </>
          } />
          <Route path="/project-detail" element={<ProjectDetailPage />} />
          <Route path="/community" element={<CommunityList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
