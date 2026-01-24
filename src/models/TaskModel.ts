import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptedDate: number | null; //quando o task é interrompido
  type: keyof TaskStateModel["config"];
};
