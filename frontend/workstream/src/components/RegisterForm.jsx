import { useState } from "react";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";

function RegisterForm(){

    //Envia os dados pro backend
    const registerUser = () => {

    }

    const [formData,setForm] = useState({
        username:"",
        email:"",
        password:"",
    });

    const readInputData = (e) =>{
        const {name,value} = e.target;
        setForm((oldData) => ({
            ...oldData,                 //Copia os dados antigos do form
            [name]: value,    //Define os novos dados do form
        }));
    }

    return (
        <div 
        className="w-[450px] h-[400px]
        flex flex-col items-center gap-6">

            <Title color="gray">
                Registre-se
            </Title>

            <Input
            placeholder="Usuario"
            type="text"
            name="username"
            value={formData.username}
            onChange={readInputData}
            
            />

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
            borderColor="emerald-500"
            onclick={()=> registerUser()}
            >
                Registre-se
            </Button>
        </div>
    )
}

export default RegisterForm;