import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto py-4">
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/:id" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
   
       
      </div>
    </div>
  );
}

export default App;