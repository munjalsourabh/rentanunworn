import './App.css';
import { Login } from './components/auth/Login';
import {Header} from './components/header/Header';
import AppAlert from './components/alert/AppAlert';
import MainLayout from './components/main/MainLayout';
import { useEffect } from 'react';
import { setLocation } from './features/location/locationSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      dispatch(setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }))
    });
  }, [])

  return (
    <>
      <Header />
      <Login></Login>
      <MainLayout></MainLayout>
      <AppAlert></AppAlert>
    </>
  );
}

export default App;
