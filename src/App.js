
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Customers from './pages/customers/Customers';
import Product from './pages/product/Product';
import New from './pages/new/New';
import Single from './pages/single/Single';


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
    element: <New/>
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
    path: "/",
    element: <Home/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/",
    element: <Home/>
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
