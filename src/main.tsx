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
import { Checks } from './pages/Checks';
import { Expenses } from './pages/Expenses';
import { AddExpense } from './pages/AddExpense';
import { AddCheck } from './pages/AddCheck';
import { Register } from './pages/Register';
import { AuthProvider } from './contexts/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProtectedRoute element={<Home />} /> },
      { path: '/add-check', element: <ProtectedRoute element={<AddCheck />} />},
      { path: '/checks', element: <ProtectedRoute element={<Checks />} />},
      { path: '/expenses', element: <ProtectedRoute element={<Expenses />} />},
      { path: '/add-expense', element: <ProtectedRoute element={<AddExpense />} />},
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
