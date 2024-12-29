import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css'
import LoginAndRegister from './pages/LoginAndRegister.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  //Rotas possiveis na aplicação
  {
    path: "/",
    element: <App />,
  },
  
  {
    path:"/enter",
    element: <LoginAndRegister/>
  },
])

//Renderiza as rotas da aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/> 
  </StrictMode>,
)
