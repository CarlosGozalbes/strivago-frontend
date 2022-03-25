import './App.css';
import MyNavbar from './components/mynavbar/MyNavbar';
import Header from './components/header/Header';
import SearchMenu from './components/searchmenu/SearchMenu';
import HomePage from './components/homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/registerpage/RegisterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
