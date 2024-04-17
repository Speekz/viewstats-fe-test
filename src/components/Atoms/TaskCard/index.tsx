import React, { FC } from "react";
import type { ITaskCard } from "./models/TaksCard.interface";

interface TaskCardProps {
  task: ITaskCard;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="overflow-hidden w-96 rounded-lg bg-gray-800 px-4 py-5 shadow sm:p-6"></div>
  );
};

export default TaskCard;
