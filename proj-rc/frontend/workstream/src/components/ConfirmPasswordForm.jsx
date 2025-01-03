import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import '../styles/PopUp.css'

function ConfirmPasswordForm(props){

    const [passwordData,setPasswordData] = useState("")

    const readPasswordData = (e) =>{
        setPasswordData(e.target.value);
    }

    const enterGroup = () => {
        //Logica para entrar dentro do grupo
    }
    
    return (
        <div className='fixed-center'>
            <div className='flex flex-col justify-center items-center'>
                <Input
                placeholder="Senha do grupo"
                type="text"
                name="passwordData"
                value={passwordData}
                onChange={readPasswordData}
                />
            </div>
                   
            <div className='flex flex-col w-[100%] gap-y-2'>
            <Button onClick={enterGroup}>Entrar</Button>
            <Button onClick={props.closePopUp}>Sair</Button>
            </div>
            
        </div>
    )
}

export default ConfirmPasswordForm;