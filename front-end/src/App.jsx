import React from 'react';
import './App.css';
import { Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import loginAction from './pages/Login/actions/loginActions';
import loginLoader from './pages/Login/loaders/loginLoader';
import SignUpPage from './pages/SignUp';
import SignUpAction from './pages/SignUp/actions/signUpAction';

export default function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <>
      <Route
        action={ SignUpAction }
        path="/signup"
        element={ <SignUpPage /> }
      />
      <Route
        loader={ loginLoader }
        action={ loginAction }
        path="/"
        element={ <Login /> }
      />
      ,
    </>,
  ));
  return (
    <RouterProvider router={ route } />
  );
}
