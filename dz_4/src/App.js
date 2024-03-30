import "bootstrap/dist/css/bootstrap.min.css";
import UsersListPage from "./page/usersListPage/UsersListPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRegisterPage from "./page/userRegisterPage/UserRegisterPage";
import Menu from "./components/Menu";
import RegistrationPage from "./page/registrationPage/RegistrationPage";
import classes from "./App.css"
function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<UserRegisterPage/>}/>
        <Route patch={"/users"} element={<UsersListPage/>}/>
        <Route path={"/registration"} element={<RegistrationPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
