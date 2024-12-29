function Button(props){
    return (
        <div>
            <button
            className={`w-[200px] h-[40px] p-2
            rounded-lg bg-${props.bgColor} border-${props.borderColor} 
            text-${props.textColor} font-semibold
            transition duration-300 hover:scale-125`}
            onClick={props.onClick}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button;