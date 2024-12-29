function Input(props){
    return (
        <input className="w-[100%] h-[50px]
        bg-gray-100
        text-center font-medium
        placeholder-gray-400 placeholder:text-lg 
        rounded-2xl outline-none"
        name={props.name}
        type={props.type} 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
    )
}

export default Input;