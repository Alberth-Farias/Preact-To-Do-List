import type { StateUpdater } from "preact/hooks";
import type { JSX } from "preact";

export type Priority = "Baixa" | "Média" | "Alta";

export interface Task {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: Priority;
  data: string;
}

export interface HistoryTask extends Task {
  completedAt: string;
}

export interface HeaderProps {
  setHistoryIsOpen: (value: StateUpdater<boolean>) => void;
  taskCount: number;
  themeCheck: boolean;
  setThemeCheck: (value: StateUpdater<boolean>) => void;
}

export interface CreateTaskProps {
  onAddTask: (task: Task) => void;
  toHide: (value: StateUpdater<boolean>) => void;
}

export interface TasksProps {
  tasks: Task[];
  completeTask: (idTask: string) => void;
  priorityColor: (priorityValue: Priority) => JSX.Element | undefined;
  dateSimplify: (taskDate: string) => string;
}

export interface HistoryProps {
  history: HistoryTask[];
  onClear: () => void;
  onClose: () => void;
}
