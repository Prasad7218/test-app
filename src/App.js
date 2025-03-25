import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/signup/SignUp';
import MyContext from './components/context/MyContext';
import Callback from './hooks/Callback';
import Reducer from './hooks/Reducer';

function App() {
  const message = "Hello from Context!";
  return (
    <MyContext.Provider value={message}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/reducer" element={<Reducer />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
