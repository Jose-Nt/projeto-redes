function Input(props){
    return (
        <input className="w-[80%] h-[50px]
        bg-gray-200
        text-center font-medium
        placeholder-gray-400 placeholder:text-lg 
        rounded-2xl outline-none
        transition duration-300 hover:scale-105"
        name={props.name}
        type={props.type} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
    )
}

export default Input;