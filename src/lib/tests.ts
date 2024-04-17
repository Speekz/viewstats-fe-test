import { ETaskPriority } from "src/components/Atoms/StatsCard/models/StatsCard.interface";

export const taskList = [
  {
    id: 1,
    title: "Take the dog out",
    description: "Just take the dog out",
    priority: ETaskPriority.Low,
    dueDate: 1713330120,
    tags: [{ id: 1, title: "Work" }],
  },
  {
    id: 2,
    title: "Do homework",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    priority: ETaskPriority.High,
    dueDate: 1713330152,
    tags: [
      { id: 1, title: "Work" },
      { id: 2, title: "School" },
    ],
  },
  {
    id: 3,
    title: "Play VideoGames",
    description: "Get diamond in lol",
    priority: ETaskPriority.Medium,
    dueDate: 1713330172,
    tags: [{ id: 3, title: "Chores" }],
  },
];

export const dashboardStats = [
  {
    name: "Tasks by priority",
    type: "tasks:priority",
    data: [
      {
        id: 1,
        title: "Take the dog out",
        priority: ETaskPriority.Low,
      },
      {
        id: 2,
        title: "Do homework",
        priority: ETaskPriority.High,
      },
      {
        id: 3,
        title: "Play VideoGames",
        priority: ETaskPriority.Medium,
      },
    ],
  },
  {
    name: "Tasks by Due Date",
    type: "tasks:dueDate",
    data: [
      {
        id: 1,
        title: "Take the dog out",
        dueDate: 1713330120,
      },
      {
        id: 2,
        title: "Do homework",
        dueDate: 1713330152,
      },
      {
        id: 3,
        title: "Play VideoGames",
        dueDate: 1713330172,
      },
    ],
  },
  {
    name: "Top 5 Tags",
    type: "tags:top",
    data: [
      {
        id: 1,
        title: "Work",
        count: 10,
      },
      {
        id: 2,
        title: "School",
        count: 20,
      },
      {
        id: 3,
        title: "Chores",
        count: 2,
      },
    ],
  },
];
