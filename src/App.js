import './App.css';
import Navbar from './Components/NavBar/Index';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/about" exact element={<About></About>}></Route>
        <Route path="/services" exact element={<Services></Services>}></Route>
        <Route path="/contact-us" exact element={<Contact></Contact>}></Route>
        <Route path="/sign-up" exact element={<Signup></Signup>}></Route>
        <Route path="/signin" exact element={<SignIn></SignIn>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
