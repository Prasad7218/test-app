import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/signup/SignUp';
// import MyContext from './components/context/MyContext';
import Callback from './hooks/Callback';
import Reducer from './hooks/Reducer';
import { store } from './redux/store'
import { Provider } from 'react-redux';
import About from './pages/About';
import Deferred from './hooks/Deffered';
import Transition from './hooks/Transition';
import Ref from './hooks/Ref';
import Insertion from './hooks/Insertion';
import ExternalStore from './hooks/ExternalStore';
function App() {
  // const message = "Hello from Context!";
  return (
    <Provider store={store}>
      {/* <MyContext.Provider value={message}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/useCallback" element={<Callback />} />
          <Route path="/useReducer" element={<Reducer />} />
          <Route path="/about" element={<About />} />
          <Route path="/useDeferredValue" element={<Deferred />} />
          <Route path="/useTransition" element={<Transition />} />
          <Route path="/useRef" element={<Ref />} />
          <Route path="/useInsertion" element={<Insertion />} />
          <Route path="/useSyncExternalStore" element={<ExternalStore />} />
        </Routes>
      </BrowserRouter>
      {/* </MyContext.Provider> */}
    </Provider>
  );
}

export default App;
