import './App.css';
import { Login } from './components/auth/Login';
import {Header} from './components/header/Header';
import AppAlert from './components/alert/AppAlert';
import MainLayout from './components/main/MainLayout';
import { useEffect } from 'react';
import { setLocation } from './features/location/locationSlice';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Product from './components/products/Product';
import Renting from './components/renting/Renting';
import Lending from './components/lending/Lending';
import ListAnItem from './components/list-item/ListAnItem';

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
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<MainLayout />} />
            <Route path='/product' element={<Product />} />
            <Route path='/renting' element={<Renting />} />``
            <Route path='/lending' element={<Lending />} />
            <Route path='/list-item' element={<ListAnItem />} />
        </Route>
      </Routes>
      {/* <MainLayout></MainLayout> */}
      <AppAlert></AppAlert>
    </>
  );
}

export default App;
