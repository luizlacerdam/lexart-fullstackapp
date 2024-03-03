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

export default function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route
      loader={ loginLoader }
      action={ loginAction }
      path="/login"
      element={ <Login /> }
    />,
  ));
  return (
    <RouterProvider router={ route } />
  );
}
