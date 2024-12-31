import Header from "../components/Header";
import Chat from "../components/Chat";
import MenuBar from "../components/MenuBar";
import { useState } from "react";
import Task from "../components/Task";
import "../styles/TasksAnimation.css";

function Home() {
  const [username] = useState("USER"); 
  const [groups] = useState(["Grupo1", "Batatas", "Grupo Legal", "HAHA", "Grupo2", "Cenouras", "Grupo Chato >:(", "anao", "Grupo3", "Alface", "Grupo Mais ou Menos", "RAAAAA" ]);
  const [level] = useState(0); 
  const [progress] = useState(50); 


  const [chatMode, setChatMode] = useState(true);
  const switchToChatMode = () => {
    setChatMode(true);
  };
  const switchToTaskMode = () => {
    setChatMode(false);
  };

  const [taskList, setTaskList] = useState([
    {
      title: "teste",
      description: "teste",
      experience: "10 points",
    },
  ]);
  const takeTasks = () => {
    //Logica para solicitar ao backend as tasks do usuario
  };

  return (
    <div
      className="
        w-[100%] h-[100vh]
        flex flex-col"
    >
      <Header switchToChatMode={switchToChatMode} switchToTaskMode={switchToTaskMode} />
      <MenuBar username={username} groups={groups} progress={progress} level={level}/>
      <div className="flex flex-1 flex-row overflow-hidden">
        {chatMode ? (
          <Chat />
        ) : (
          <div
            className="flex flex-col  items-center 
                    w-[100%] h-[100%] overflow-y-auto"
          >
            {taskList.map((task) => (
              <div
                key={task.id}
                className="
                gap-y-4 w-[80%] 
                fade-animation"
              >
                <Task
                  title={task.title}
                  description={task.description}
                  experience={task.experience}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
