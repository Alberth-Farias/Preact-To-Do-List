import { useState } from "preact/hooks";
import Header from "./modules/header";
import CreateTask from "./modules/createTask";
import Tasks from "./modules/tasks";
import History from "./modules/history";
import Footer from "./modules/footer";
import { useEffect } from "preact/hooks";

export function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCreateOpen, setIsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [taskCount, setTaskCount] = useState(() => {
    return Number(localStorage.getItem("tasksCount") || 0);
  });
  const [themeCheck, setThemeCheck] = useState(() => {
    return localStorage.getItem("themePreference") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("tasksCount", taskCount.toString());
  }, [taskCount]);

  useEffect(() => {
    localStorage.setItem("themePreference", themeCheck.toString());
  }, [themeCheck]);

  function addTask(task) {
    setTasks([task, ...tasks]);
    console.log(themeCheck);
  }

  function completeTask(idTask) {
    const task = tasks.find((t) => t.id === idTask);
    if (task) {
      setHistory([{ ...task, completedAt: new Date().toISOString() }, ...history]);
      setTasks(tasks.filter((t) => t.id !== idTask));
      setTaskCount((e) => ++e);
    }
  }

  function clearHistory() {
    setHistory([]);
    setTaskCount(0);
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
        setHistoryIsOpen={setIsHistoryOpen}
        taskCount={taskCount}
        themeCheck={themeCheck}
        setThemeCheck={setThemeCheck}
      />

      {isHistoryOpen && (
        <History
          history={history}
          onClear={clearHistory}
          onClose={() => setIsHistoryOpen(false)}
        />
      )}

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
          className="btn btn-lg btn-circle btn-accent p-7 text-4xl"
        >
          +
        </button>
      </div>
    </>
  );
}
