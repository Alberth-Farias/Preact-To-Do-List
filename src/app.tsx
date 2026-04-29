import { useState } from "preact/hooks";
import Header from "./modules/header";
import CreateTask from "./modules/createTask";
import Tasks from "./modules/tasks";
import { OnStart, beforeUnload } from "./lib/functions";
import Footer from "./modules/footer";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [isCreateOpen, setIsOpen] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const [themeCheck, setThemeCheck] = useState(false);

  OnStart(setTasks, setTaskCount, setThemeCheck);
  beforeUnload(tasks, taskCount, themeCheck);

  function addTask(task) {
    setTasks([task, ...tasks]);
    console.log(themeCheck);
  }

  function completeTask(idTask) {
    setTasks(tasks.filter((task) => task.id !== idTask));
    setTaskCount((e) => ++e);
  }

  function dateSimplify(taskDate) {
    const hoje = new Date();
    const hojeFormatado = hoje.toLocaleDateString("pt-BR");

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);
    const ontemFormatado = ontem.toLocaleDateString("pt-BR");

    const amanha = new Date();
    amanha.setDate(hoje.getDate() + 1);
    const amanhaFormatado = amanha.toLocaleDateString("pt-BR");

    if (taskDate === hojeFormatado) {
      return "Hoje";
    }
    if (taskDate === ontemFormatado) {
      return "Ontem";
    }
    if (taskDate === amanhaFormatado) {
      return "Amanhã";
    }

    return taskDate;
  }

  function priorityColor(priorityValue) {
    if (priorityValue === "Baixa") {
      return (
        <div className="badge badge-soft badge-success text-2xl pt-3 pb-3">
          Baixa
        </div>
      );
    }
    if (priorityValue === "Média") {
      return (
        <div className="badge badge-soft badge-warning text-2xl pt-3 pb-3">
          Média
        </div>
      );
    }
    if (priorityValue === "Alta") {
      return (
        <div className="badge badge-soft badge-error text-2xl pt-3 pb-3">
          Alta
        </div>
      );
    }
  }

  return (
    <>
      {isCreateOpen && <CreateTask onAddTask={addTask} toHide={setIsOpen} />}

      <Header
        setHistoryIsOpen={setIsOpen}
        taskCount={taskCount}
        themeCheck={themeCheck}
        setThemeCheck={setThemeCheck}
      />

      <Tasks
        tasks={tasks}
        completeTask={completeTask}
        priorityColor={priorityColor}
        dateSimplify={dateSimplify}
      />

      <Footer />

      <div className="fab fixed bottom-5 right-5">
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-lg btn-circle btn-accent text-3xl"
        >
          +
        </button>
      </div>
    </>
  );
}
