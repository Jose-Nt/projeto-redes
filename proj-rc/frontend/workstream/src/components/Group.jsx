function Group(props){
    return (
        <div 
        className="w-[100%] h-[100%] bg-slate-500
        rounded-2xl cursor-pointer gap-4
        flex flex-row justify-center items-center">
            <img src={props.image} alt="imgIcon" className="w-[4%] h-[100%] rounded-full"/>
            <div>
                <h1 className="font-mono text-center text-pretty text-white">Nome do grupo</h1>
            </div>
        </div>
    )
}

export default Group;