import { useEffect } from "preact/hooks";

export function beforeUnload(tasks, taskCount, themeCheck) {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("tasksCount", taskCount);
      localStorage.setItem("themePreference", themeCheck);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  });
}

export function OnStart(setTasks, setTaskCount, setThemeCheck) {
  const localTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const completeTasks = Number(localStorage.getItem("tasksCount") || 0);
  const themePreference = localStorage.getItem("themePreference");

  const handleOnload = () => {
    if (localTasks && localTasks.length > 0) {
      setTasks(localTasks);
    }
    if (completeTasks > 0) {
      setTaskCount(completeTasks);
    }
    if (themePreference === "true") {
      setThemeCheck(true);
    }
  };

  window.addEventListener("load", handleOnload);
  return () => window.removeEventListener("load", handleOnload);
}
