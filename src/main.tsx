import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import ErrorPage from './pages/Error';
import { Login } from './pages/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { Home } from './pages/Home';
import { DepositList } from './pages/DepositList';
import { OrderList } from './pages/OrderList';
import { Purchase } from './pages/Purchase';
import { Deposit } from './pages/Deposit';
import { Register } from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectedRoute element={<Home />} /> },
      { path: '/deposit', element: <ProtectedRoute element={<Deposit />} />},
      { path: '/deposits', element: <ProtectedRoute element={<DepositList />} />},
      { path: '/orders', element: <ProtectedRoute element={<OrderList />} />},
      { path: '/purchase', element: <ProtectedRoute element={<Purchase />} />},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
