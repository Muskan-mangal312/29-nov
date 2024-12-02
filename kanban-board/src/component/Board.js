import React from "react";
import Column from "./Column";

const tasks = {
  todo: [
    { id: "CAM-4", title: "Add Multi-Language Support", type: "Feature Request" },
    { id: "CAM-8", title: "Create Onboarding Tutorial", type: "Feature Request" },
  ],
  inProgress: [
    { id: "CAM-3", title: "Optimize Database Queries", type: "Feature Request" },
  ],
  done: [
    { id: "CAM-6", title: "Enhance Search Functionality", type: "Feature Request" },
    { id: "CAM-7", title: "Integrate Third-Party Payment", type: "Feature Request" },
  ],
};

const Board = () => {
  return (
    <div className="board">
      <Column title="Todo" tasks={tasks.todo} />
      <Column title="In Progress" tasks={tasks.inProgress} />
      <Column title="Done" tasks={tasks.done} />
    </div>
  );
};

export default Board;
