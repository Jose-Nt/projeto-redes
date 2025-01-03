import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Edit } from 'lucide-react';
import '../styles/PopUp.css'
import anonimoImagem from "../img/default_user.svg"

function CreateGroupForm(props){

    const createGroup = () =>{
        //Logica para criar grupo no backend
    }

    const [groupInfo,setGroupInfo] = useState({
        image:"",
        name:"",
        password:""
    })

    const [editImage,setEditImage] = useState(anonimoImagem);

    const changeGroupImage = () => {
        //Logica para abrir os arquivos e salvar a imagem nova
    }

    const readInput = (e) =>{
        const {name,value} = e.target;
        setGroupInfo((oldData) => ({
            ...oldData,                
            [name]: value,              
        }));
    }
    
    return (
        <div className='fixed-center'>
            <div className='flex flex-col items-center gap-y-4'>
                <div className="relative group w-[10%] h-[10%]">
                    <img 
                    src={editImage} 
                    alt="imgGrupo" 
                    className="w-full h-full rounded-full cursor-pointer"
                    />
                    <span 
                    className="absolute inset-0 flex items-center justify-center 
                            bg-black bg-opacity-50 rounded-full text-white opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <Edit size={20} color="white" cursor="pointer" onclick={changeGroupImage} /> 
                    </span>
                </div>
                <Input
                placeholder="Nome do grupo"
                type="Text"
                name="name"
                value={groupInfo.name}
                onChange={readInput}
                />
                <Input
                placeholder="Senha do grupo"
                type="password"
                name="password"
                value={groupInfo.password}
                onChange={readInput}
                />
            </div>
            
            <div className='flex flex-col w-[100%] gap-y-2'>
            <Button onClick={createGroup}>Criar</Button>
            <Button onClick={props.closePopUp}>Sair</Button>
            </div>
            
        </div>
    )
}

export default CreateGroupForm;