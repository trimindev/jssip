import Login from './containers/Login';

import Dialpad from './containers/Dialpad';
import Call from './containers/Call';

function App() {
  return (
    <div className="justify-center items-center flex h-screen w-screen select-none">
      <Login />
      <Dialpad />
      <Call />
    </div>
  );
}

export default App;
