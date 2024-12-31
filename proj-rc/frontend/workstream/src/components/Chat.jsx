import Message from './Message';
import anonimoImagem from "../img/default_user.svg"
import Input from '../components/Input'
import { useState } from 'react';
import {CirclePlus } from 'lucide-react';
import "../styles/Chat.css";

function Chat(){
    const [userMessage,setUserMessage] = useState("");
    const [messageList,setMessageList] = useState([
        {
            //Exemplo de mensagem recebida pelo backend
            id:1,
            image:anonimoImagem,
            name:"Teste",
            message:"My first message in english."
        }
    ])

    const readInputData = (e) => {
        setUserMessage(e.target.value)
    };

    const sendMessage = () => {
        if (userMessage === "") return; //Caso nao haja mensagem

        //Solicitar ao backend ou guardar as informações do usuario em algum lugar
        //Mudar isso depois
        const newMessage = {
            id: messageList.length+1,
            image: anonimoImagem, 
            name: "Você", 
            message: userMessage,
        };

        //Definir lista de mensagens com a nova mensagem
        setMessageList([...messageList, newMessage]);
        setUserMessage(""); 
    };

    const handleEnterButton = (e) =>{
        if (e.key === "Enter"){sendMessage();}   
    }

    const showGroupMessages = () => {
        //Logica para solicitar ao backend as mensagens do grupo

        //Colocar todas as mensagens em messageList
    }

    //Funcao para enviar arquivos na conversa
    const sendFiles = () => {

    }

    return (
        <div 
        className="h-screen w-full 
        flex flex-col items-center py-6">
            <div className='flex flex-col w-[80%] h-[100%] overflow-y-auto'>
                {messageList.map((message) => (
                <div key={message.id} className="gap-y-4 fade-animation">
                    <Message
                    message={message.message}
                    name={message.name}
                    image={message.image}
                    />
                </div>
                ))}
            </div>

            <div className='w-full flex flex-row justify-center items-center p-10'>
            <Input 
                placeholder="Digite algo"
                type="text"
                name="userMessage"
                value={userMessage}
                onChange={readInputData} 
                onKeyDown={handleEnterButton}
            />
            <CirclePlus 
            size={35}
            color="gray"
            cursor="pointer"
            onClick={sendFiles}
            />
            </div>
        </div>
    )
}

export default Chat;