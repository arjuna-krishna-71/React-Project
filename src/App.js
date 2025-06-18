import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UHome from './components/user/UHome';
import AHome from './components/admin/AHome';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userhome" element={<ProtectedRoute><UHome /></ProtectedRoute>} />
          <Route path="/adminhome" element={<ProtectedRoute><AHome /></ProtectedRoute>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
