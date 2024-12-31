import Header from "../components/Header";
import Chat from "../components/Chat";
import MenuBar from "../components/MenuBar";
import { useState } from "react";
import Task from "../components/Task";
import "../styles/TasksAnimation.css";

function Home() {
  const [chatMode, setChatMode] = useState(false);
  const switchChatMode = () => {
    setChatMode(!chatMode);
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
      <Header switchChatMode={switchChatMode} />

      <div className="flex flex-row h-[100%]">
        <MenuBar />
        {chatMode ? (
          <Chat />
        ) : (
          <div
            className="flex flex-col  items-center 
                    w-[80%] h-[100%] overflow-y-auto"
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
