import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { PostContainer } from "./context/postContext.js";
import "./App.css";

function App() {
  return (
    <div className="bg-dark vh-100 d-flex d-md-block ">
      <div className="p-3 mb-5 w-100 bg-primary text-white position-absolute top-50 start-50 translate-middle">
        <PostContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/3" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  );
}

export default App;
