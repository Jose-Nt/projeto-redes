import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Panel from "../components/Panel";
import '../styles/animations.css'; // Certifique-se de que o arquivo CSS está correto

function LoginAndRegister() {
    const [isSignUp, SetisSignUp] = useState(false); 
    const [formTransition, setFormTransition] = useState(''); // Estado para a transição do formulário

    const switchForm = () => {
        if (isSignUp) 
        {
            //Register
            setFormTransition("-translate-x-full"); 
            setTimeout(() => {
                setFormTransition("translate-x-full"); 
                SetisSignUp(false); 
            }, 400); // Tempo da animação antes de trocar o formulário
        } 
        else 
        {
            //Login
            setFormTransition("translate-x-full"); 
            setTimeout(() => {
                SetisSignUp(true);
                setFormTransition("-translate-x-full"); 
            }, 400); // Tempo da animação antes de trocar o formulário
        }
    };

    return (
        <div className="w-[100%] h-[100vh] flex flex-row items-center">
            <div className={`w-[50%] h-[100%] ${isSignUp ? 'move-right' : ''} panel-animation`}>
                {!isSignUp && 
                    <Panel
                        titlePanel="Novo no WorkStream ?"
                        textPanel="Caso seja novo no WorkStream, registre-se para conseguir gerenciar de forma eficiente as suas tarefas ou as de sua equipe!"
                        typeButton="Registre-se"
                        onClick={switchForm}
                    />
                }
                {isSignUp && 
                    <Panel
                        titlePanel="Já é um de nós ?"
                        textPanel="Caso você já possua uma conta no WorkStream, faça o acesso para continuar gerenciando seu trabalho de forma eficiente!"
                        typeButton="Login"
                        onClick={switchForm}
                    />
                }
            </div>

            <div className={`form-container transition-transform duration-300 ${formTransition}`}>
                {!isSignUp ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
}

export default LoginAndRegister;
