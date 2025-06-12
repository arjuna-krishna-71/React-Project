import {Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UHome from './components/user/UHome';
import AHome from './components/admin/AHome';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userhome" element={<UHome />} />
          <Route path="/adminhome" element={<AHome />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
