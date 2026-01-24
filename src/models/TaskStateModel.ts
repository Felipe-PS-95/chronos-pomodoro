import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondsRemaining: number; // Home, CountDown, histórico, MainForm, Button
  formatttedSecondsRemaining: string; // Título, CountDown
  activeTaskId: TaskModel | null; // CountDown, histórico, MainForm, Button
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
