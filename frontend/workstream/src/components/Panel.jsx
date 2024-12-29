import Button from "./Button";

function Panel(props){

    return (
        <div 
        className="
        w-[100%] h-[100vh] 
        bg-emerald-500 rounded-full
        flex flex-col justify-center items-center p-8">
            <h3 className="text-white font-mono text-pretty ">
                {props.titlePanel}
            </h3>
            <p className="text-white font-mono text-pretty break-words whitespace-normal">
                {props.textPanel}
            </p>
            <Button
            bgColor="bg-teal-300"
            borderColor="white"
            textColor="white"
            onClick={props.onClick}
            >
                {props.typeButton}
            </Button>
        </div>
    )
}

export default Panel;