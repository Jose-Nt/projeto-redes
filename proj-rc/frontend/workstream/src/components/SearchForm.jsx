import { useState } from "react";
import Group from './Group';
import Input from "./Input";
import {Search } from 'lucide-react';
import {LogIn} from 'lucide-react';
import Button from "./Button";
import '../styles/PopUp.css'
import anonimoImagem from "../img/default_user.svg"

function SearchForm(props){

    const [groupList,setGroupList] = useState([
    {
        image:anonimoImagem,
        name:"teste",
        codigo:4
    },
    {
        image:anonimoImagem,
        name:"teste",
        codigo:4
    },
    {
        image:anonimoImagem,
        name:"teste",
        codigo:4
    },

])

    const takeGroupList = ()=>{
        //Logica para pegar os grupos no backend
    }

    const [searchGroup, setSearchGroup] = useState("")

    const readSearchData = (e) =>{
        setSearchGroup(e.target.value);
    }

    return (
        <div className="fixed-center">
            <div className="flex flex-row justify-center items-center">
                <Input
                placeholder="Pesquisar grupos"
                type="text"
                name="searchGroup"
                value={searchGroup}
                onChange={readSearchData}/>

                <Search
                cursor="pointer"
                size={35}
                />
            </div>

            <div className="flex flex-col items-center overflow-y-auto">
                {groupList.map((group)=>(
                <div key={group.id}
                className="
                flex flex-row 
                gap-y-4 w-[80%] 
                fade-animation "
                
                >
                    <Group
                    image={group.image}
                    nome={group.name}
                    codigo={group.codigo}
                    />
                    <LogIn 
                    size={35}
                    onClick={props.openPasswordConfirm}
                    cursor="pointer"/>
                </div>
                ))}
            </div>
            <Button onClick={props.closePopUp}>Sair</Button>

        </div>
    )
}

export default SearchForm;