function Button(props){
    return (
        <div>
            <button className="w-[100%] h-[100%] 
            rounded-md shadow cursor-pointer
             bg-emerald-500 text-white font-mono font-semibold
             transition duration-300 hover:scale-105"
            onClick={props.onClick}>
                {props.children}
            </button>   
        </div>
    )
}


export default Button;