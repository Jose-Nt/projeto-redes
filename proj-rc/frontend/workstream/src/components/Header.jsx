import { MessageCircle } from 'lucide-react'
import { UserRound } from 'lucide-react'; 
import {CalendarCheck} from 'lucide-react'

function Header(props){
    return (
    <div className="
    w-[100%] h-[10%] bg-emerald-500
    flex flex-row justify-center items-center gap-10">
        
        <div
        onClick={props.switchChatMode} 
        className='flex flex-col items-center 
        text-white font-medium cursor-pointer
        transition hover:scale-110'>
        <MessageCircle 
            size={30}
            color="white"
        />
            <h1>Chat</h1>
        </div>
        <div className='flex flex-col items-center 
        text-white font-medium cursor-pointer
        transition hover:scale-110'>
            <UserRound 
                size={30}
                color="white"
            />
            <h1>Participantes</h1>
        </div>
        <div 
        onClick={props.switchChatMode}
        className='flex flex-col items-center 
        text-white font-medium cursor-pointer
        transition hover:scale-110'>
            <CalendarCheck 
                size={30}
                color="white"
            />
            <h1>Tarefas</h1>
        </div>
    </div>
    )
}

export default Header;