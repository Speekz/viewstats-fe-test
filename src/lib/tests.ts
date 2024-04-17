import { ETaskPriority } from "src/components/Atoms/StatsCard/models/StatsCard.interface";

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
