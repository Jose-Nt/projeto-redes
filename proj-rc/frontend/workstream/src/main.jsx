import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  //Rotas possiveis na aplicação
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/login",
    element: <Login/>
  }
])

//Renderiza as rotas da aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/> 
  </StrictMode>,
)