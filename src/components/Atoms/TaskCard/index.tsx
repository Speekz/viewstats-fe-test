import React, { FC } from "react";
import type { ITaskCard } from "./models/TaksCard.interface";
import { ETaskPriority } from "../StatsCard/models/StatsCard.interface";
import classNames from "classnames";
import Chip from "../Chip";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

interface TaskCardProps {
  task: ITaskCard;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="overflow-hidden w-4/5 rounded-lg bg-gray-800 px-4 py-5 shadow sm:p-6">
      <div className="grid grid-cols-9">
        <div className="flex justify-left items-center">
          <input
            id="completed"
            aria-describedby="completed-task"
            name="completed"
            type="checkbox"
            className="h-6 w-6 md:h-8 md:w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="flex flex-col col-span-3">
          <label className="truncate text-2xl font-medium text-gray-100">
            {task.title}
          </label>
          <label className="truncate text-sm text-gray-100">
            {task.description}
          </label>
        </div>
        <div className="flex justify-center items-center col-span-3 md:col-span-1">
          <label
            className={classNames(
              {
                "text-red-400": task.priority === ETaskPriority.High,
                "text-orange-400": task.priority === ETaskPriority.Medium,
                "text-blue-400": task.priority === ETaskPriority.Low,
              },
              "text-lg md:text-xl font-bold"
            )}
          >
            {task.priority}
          </label>
        </div>
        <div className="md:flex flex-col gap-2 justify-center items-center col-span-2 hidden">
          {task.tags.map((tag) => (
            <Chip text={tag.title} />
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center col-span-2">
          <PencilSquareIcon className="text-white h-8" />
          <TrashIcon className="text-white h-8" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
