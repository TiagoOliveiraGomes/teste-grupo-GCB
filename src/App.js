import Home from './pages/home'
import Register from './pages/register';
import { Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
