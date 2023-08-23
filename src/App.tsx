// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import SecondPage from './components/SecondPage';
import Tree from './components/tree';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<UserForm/>} /> 
        <Route path="/second-page" element={<SecondPage/>}/>
        <Route path="/tree" element={<Tree/>}/>
      </Routes>
    </Router>
  );
}

export default App;
