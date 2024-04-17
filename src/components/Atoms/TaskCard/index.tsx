import React, { FC } from "react";
import type { ITaskCard } from "./models/TaksCard.interface";

interface TaskCardProps {
  task: ITaskCard;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="overflow-hidden w-96 rounded-lg bg-gray-800 px-4 py-5 shadow sm:p-6">
      <div className="flex flex-col">
        <label className="truncate text-xl font-medium text-gray-100">
          {task.title}
        </label>
        <label className="text-sm font-medium text-gray-100">
          {task.description}
        </label>
      </div>
    </div>
  );
};

export default TaskCard;
