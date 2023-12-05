import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Overview from "./pages/Overview";
import Income from "./pages/Income";
import UpdateIncome from "./pages/UpdateIncome";
import Expense from './pages/Expense.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/income/:incomeId/update",
        element: <UpdateIncome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
