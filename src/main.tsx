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
import { AuthProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectedRoute element={<Home />} /> },
      { path: '/add-check', element: <ProtectedRoute element={<Deposit />} />},
      { path: '/checks', element: <ProtectedRoute element={<DepositList />} />},
      { path: '/expenses', element: <ProtectedRoute element={<OrderList />} />},
      { path: '/add-expense', element: <ProtectedRoute element={<Purchase />} />},
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
