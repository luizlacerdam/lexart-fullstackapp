import React from 'react';
import './App.css';
import { Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import loginAction from './pages/Login/actions/loginActions';
import SignUpPage from './pages/SignUp';
import SignUpAction from './pages/SignUp/actions/signUpAction';
import AppHome from './pages/AppHome';
import appLoader from './pages/AppHome/loaders/appLoader';
import productLoader from './pages/AppHome/loaders/productsLoader';
import Layout from './pages/components/Layout';
import AddProduct from './pages/AddProduct';
import addProductAction from './pages/AddProduct/actions/addProductAction';
import EditProduct from './pages/EditProduct';
import editProductLoader from './pages/EditProduct/loaders/editProductLoader';
import editProductAction from './pages/EditProduct/actions/editProductAction';

export default function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <>
      <Route
        action={ SignUpAction }
        path="/signup"
        element={ <SignUpPage /> }
      />
      <Route
        action={ loginAction }
        path="/"
        element={ <Login /> }
      />

      <Route path="/app" loader={ appLoader } element={ <Layout /> }>
        <Route
          path="edit/:id"
          action={ editProductAction }
          loader={ editProductLoader }
          element={ <EditProduct /> }
        />
        <Route path="add" action={ addProductAction } element={ <AddProduct /> } />
        <Route path="" loader={ productLoader } element={ <AppHome /> } />

      </Route>
      ,
    </>,
  ));
  return (
    <RouterProvider router={ route } />
  );
}
