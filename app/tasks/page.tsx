import React from "react";
import TaskCard from "src/components/Atoms/TaskCard";
import ApplicationShell from "src/components/templates/ApplicationShell";
import { taskList } from "../../src/lib/tests";

const TasksPage = () => {
  return (
    <ApplicationShell>
      {taskList.map((task) => (
        <TaskCard key={task.title} />
      ))}
    </ApplicationShell>
  );
};

export default TasksPage;
