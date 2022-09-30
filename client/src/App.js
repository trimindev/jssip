import Login from './containers/Login';
import Dialpad from './containers/Dialpad';
import Call from './containers/Call';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const dialpad = useSelector((state) => state.dialpad);
  const ip = useSelector((state) => state.ip);
  return (
    <div className="justify-center items-center flex h-screen w-screen select-none">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/dialpad"
          element={ip ? <Dialpad /> : <Navigate to="/" />}
        />
        <Route
          path="/call"
          element={dialpad ? <Call /> : <Navigate to="/dialpad" />}
        />
      </Routes>
    </div>
  );
}

export default App;
