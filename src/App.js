
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Product from './pages/product/Product';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { userInputs, productInputs } from './formData';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import './style/dark.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/customers/",
    element: <Customers/>
  },
  {
    path: "/product/",
    element: <Product/>
  },
  {
    path: "/product/:productId/new",
    element: <New inputs = {productInputs} title = {"Add New Product"}/>
  },
  {
    path: "/customers/:customersId/new",
    element: <New inputs = {userInputs} title = {"Add New User"}/>
  },
  {
    path: "/customers/:customerId",
    element: <Single/>
  },
  {
    path: "/prouct/:productId",
    element: <Single/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);


function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode? "App dark": "App"}>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
