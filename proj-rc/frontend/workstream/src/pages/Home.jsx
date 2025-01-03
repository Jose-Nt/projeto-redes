import Header from "../components/Header";
import Chat from "../components/Chat";
import MenuBar from "../components/MenuBar";
import { useState } from "react";
import Task from "../components/Task";
import "../styles/TasksAnimation.css";
import CreateGroupForm from '../components/CreateGroupForm';
import SearchForm from '../components/SearchForm';
import ConfirmPasswordForm from "../components/ConfirmPasswordForm";

function Home() {


  //----------------------------------------- Data -------------------------------

  const [username] = useState("USER"); 
  const [groups] = useState(["Grupo1", "Batatas", "Grupo Legal", "HAHA", "Grupo2", "Cenouras", "Grupo Chato >:(", "anao", "Grupo3", "Alface", "Grupo Mais ou Menos", "RAAAAA" ]);
  const [level] = useState(0); 
  const [progress] = useState(50); 


  //---------------------------------------- Chat and Task ----------------------------
  const [chatMode, setChatMode] = useState(true);

  const switchToChatMode = () => {
    setChatMode(true);
  };
  const switchToTaskMode = () => {
    setChatMode(false);
  };

  //--------------------------------- Create and Search -------------------------------
  const [searchOpen,setSearchOpen] = useState(false);
  const [createOpen,setCreateOpen] = useState(false);

  const switchCreateForm = () =>{
      setCreateOpen(true);
      setSearchOpen(false);
  }

  const switchSearchForm = () => {
      setSearchOpen(true);
      setCreateOpen(false);
      setPasswordForm(false);
  }

  const closePopUp = () =>{
    setCreateOpen(false);
    setSearchOpen(false);
    setPasswordForm(false);
  } 


  //--------------------------------------- PasswordForm ------------------

  const [passwordOpen,setPasswordForm] = useState(false);

  const openPasswordConfirm = ()=>{
    setSearchOpen(false);
    setPasswordForm(!passwordOpen);
}

  //--------------------------------------- Tasks -----------------------
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
        flex flex-col relative"
    >

      {(createOpen || searchOpen || passwordOpen ) && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      )}

      <Header 
        switchToChatMode={switchToChatMode} 
        switchToTaskMode={switchToTaskMode} 
        switchSearchForm={switchSearchForm} 
        switchCreateForm={switchCreateForm}
      />

      <MenuBar 
        username={username} 
        groups={groups} 
        progress={progress} 
        level={level}
      />

      <div className="flex flex-1 flex-row overflow-hidden">
        {chatMode ? (
          <Chat />
        ) : (
          <div
            className="flex flex-col  items-center 
                    w-[100%] h-[100%] overflow-y-auto">
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
      <div className="">
        {createOpen && <CreateGroupForm closePopUp={closePopUp} />}
        {searchOpen && <SearchForm closePopUp={closePopUp} openPasswordConfirm={openPasswordConfirm} />}
        {passwordOpen && <ConfirmPasswordForm closePopUp={closePopUp}/> }
      </div>

    </div>
  );
}

export default Home;
