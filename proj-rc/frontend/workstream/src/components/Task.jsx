function Task(props){
    return (
        <div 
        className="flex flex-col justify-start 
        w-[100%] h-[100%] 
        transition hover:scale-105 shadow-lg rounded-xl
        text-pretty px-4 py-1 cursor-pointer">
            <h1 className="text-orange-600 font-mono font-extrabold text-xl text-center break-words">{props.title}</h1>
            <h1 className="text-black font-medium text-center break-words">Tarefa: {props.description}</h1>
            <h1 className="text-black font-light text-center break-words">Recompensa: {props.experience}</h1>
        </div>
    )
}

export default Task;