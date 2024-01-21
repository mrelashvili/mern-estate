import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Heeader from './components/Heeader';

const App = () => {
  return (
    <BrowserRouter>
      <Heeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
