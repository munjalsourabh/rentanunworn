import './App.css';
import { Login } from './components/auth/Login';
import {Header} from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      {/* <div className='login-container'> */}
        <Login></Login>
      {/* </div> */}
    </>
  );
}

export default App;
