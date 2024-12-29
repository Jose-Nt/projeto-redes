import { useState } from "react";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";

function LoginForm(){

    //Envia os dados pro backend
    const loginUser = () => {

    }
    const [formData, setForm] = useState({
        email:"",
        password:""
    });

    const readInputData = (e) => {
        const {name,value} = e.target;
        setForm((oldData) => ({
            ...oldData,                 //Copia os dados antigos do form
            [name]: value,    //Define os novos dados do form
        }));
    };

    return (
        <div 
        className="w-[450px] h-[400px] 
        flex flex-col items-center gap-6
        overflow-hidden justify-center"
        >
            <Title color="gray-700">
                Login
            </Title>

            <Input
            placeholder="E-mail"
            type="text"
            name="email"
            value={formData.email}
            onChange={readInputData}
            />

            <Input
            placeholder="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={readInputData}
            />

            <Button 
            bgColor="emerald-500"
            textColor="white"
            onClick={()=> loginUser()}
            >
                Login
            </Button>
        </div>
    )
}

export default LoginForm;