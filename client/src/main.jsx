import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/HomePage.jsx'
import App from './App.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import Detail from './pages/Detail.jsx';
import NoMatch from './pages/NoMatch.jsx';
// import Login from './pages/Login.jsx';
// import Signup from './pages/Signup.jsx';
import Success from './pages/Success.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import Menu from './pages/Menu.jsx'
import Cart from './components/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Main />
      },
      {
        path: '/ProductsPage',
        element: <ProductsPage />
      }, 
      {
        path: '/Menu',
        element: <Menu />
      },
       {
        path: '/Cart',
        element: <Cart />
      }, 
       { path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
