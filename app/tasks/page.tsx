import React from "react";
import TaskCard from "src/components/Atoms/TaskCard";
import ApplicationShell from "src/components/templates/ApplicationShell";
import { taskList } from "../../src/lib/tests";

export const metadata = {
  title: "Tasks",
};

const TasksPage = () => {
  return (
    <ApplicationShell title="Tasks">
      <div className="flex flex-col gap-4 justify-center items-center">
        {taskList.map((task) => (
          <TaskCard task={task} key={task.title} />
        ))}
      </div>
    </ApplicationShell>
  );
};

export default TasksPage;
