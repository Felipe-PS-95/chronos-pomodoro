import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

// export type TaskStateModel = {
//   tasks: TaskModel[];
//   secondsRemaining: number;
//   formatttedSecondsRemaining: string;
//   activeTaskId: TaskModel | null;
//   currentCycle: number;
//   config: {
//     workTime: number;
//     shortBreakTime: number;
//     longBreakTime: number;
//   };
// };

const initialState: TaskStateModel[] = {
  tasks: [],
  secondsRemaining: 0,
  formatttedSecondsRemaining: "00:00",
  activeTaskId: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 14,
  },
};

export function App() {
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}
