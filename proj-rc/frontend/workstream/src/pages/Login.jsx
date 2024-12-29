import { useState } from "react";
import { Lock } from 'lucide-react'
import {CircleUser} from 'lucide-react'
import {Mail} from 'lucide-react'
import "../styles/Login.css";
import Input from "../components/Input";
import signUpImg from '../img/signup.svg'
import signInImg from '../img/signin.svg'

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(!isSignUp);
  };

  const [formData, setForm] = useState({
    username:"",
    email:"",
    password:""
});

    const readInputData = (e) => {
        const {name,value} = e.target;
        setForm((oldData) => ({
            ...oldData,                 //Copia os dados antigos do form
            [name]: value,              //Define os novos dados do form
        }));
    };

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          
          {/* Formulário de Login */}
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Login</h2>
            <div className="input-field">
                <Mail />
                <Input 
                placeholder="E-mail"
                type="text"
                name="email"
                value={formData.email}
                onChange={readInputData}
                />
            </div>
            <div className="input-field">
                <Lock />
                <Input 
                placeholder="Senha"
                type="password"
                name="password"
                value={formData.password}
                onChange={readInputData}
                />
            </div>
            <button className="btn">Login</button>
          </form>

          {/* Formulário de Registro */}
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Registre-se</h2>
            <div className="input-field">
            <CircleUser />
            <Input 
                placeholder="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={readInputData}
                />
            </div>
            <div className="input-field">
            <Mail />
            <Input 
                placeholder="E-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={readInputData}
                />
            </div>
            <div className="input-field">
            <Lock />
            <Input 
                placeholder="Senha"
                type="password"
                name="password"
                value={formData.password}
                onChange={readInputData}
                />
            </div>
            <button className="btn">Registrar</button>
          </form>
        </div>
      </div>

      {/* Painéis de navegação */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">Novo no WorkStream ?</h3>
            <p className="loginp">Caso seja novo no WorkStream, registre-se para conseguir gerenciar de forma eficiente as suas tarefas ou as de sua equipe!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Registre-se
            </button>
          </div>
          <img src={signUpImg} className="image" alt="img1" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">Já é um de nós?</h3>
            <p className="loginp">Caso você já possua uma conta no WorkStream, faça o acesso para continuar gerenciando seu trabalho de forma eficiente!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Login
            </button>
          </div>
          <img src={signInImg} className="image" alt="img2" />
        </div>
      </div>
    </div>
  );
}

export default Login;
