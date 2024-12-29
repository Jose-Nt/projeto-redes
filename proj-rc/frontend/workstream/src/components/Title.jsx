function Title(props){
    return (
        <h1 
        className={`font-medium text-3xl text-${props.color} text-pretty text-center`}>
            {props.children}
        </h1>
    )
}

export default Title;