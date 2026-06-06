import { Routes, Route, Navigate } from "react-router-dom";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Search from "./pages/Search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/articles" />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;