import './App.css';
import Hello from "./pages/hello"
import Home from './pages/Main/home';
import Login from './pages/login';
import Forgot from './pages/forgot';
import Pg1 from './pages/Main/mainpage/pg1';
import Pg2 from './pages/Main/mainpage/pg2';
import Pg3 from './pages/Main/mainpage/pg3';
import Pg4 from './pages/Main/mainpage/pg4';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Hello />} />
        <Route path="/" element={<Login />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Home" element={<Home />} />
        <Route path="pg1" element={<Pg1 />} />
        <Route path="pg2" element={<Pg2 />} />
        <Route path="pg3" element={<Pg3 />} />
        <Route path="pg4" element={<Pg4 />} />
      </Routes>
    </Router>
  );
}

export default App;

