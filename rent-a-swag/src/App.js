import './App.css';
import { Login } from './components/auth/Login';
import {Header} from './components/header/Header';
import AppAlert from './components/alert/AppAlert';
import MainLayout from './components/main/MainLayout';

function App() {
  return (
    <>
      <Header />
      {/* <div className='login-container'> */}
        <Login></Login>
        <MainLayout></MainLayout>
        <AppAlert></AppAlert>
      {/* </div> */}
    </>
  );
}

export default App;
