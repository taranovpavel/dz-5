import './App.css';
import UsersPage from "./pages/usersPage/UsersPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInfoPage from "./pages/userInfoPage/UserInfoPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UsersPage/>}/>
            <Route path='/:id' element={<UserInfoPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
