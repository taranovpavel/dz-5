import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from "./App.css"
import PostPage from "./page/postPage/PostPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
