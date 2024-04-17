import { ETaskPriority } from "../../StatsCard/models/StatsCard.interface";

export interface ITaskCard {
  id: number;
  title: string;
  description: string;
  priority: ETaskPriority;
  dueDate: number;
  tags: ITaskTag[];
}

export interface ITaskTag {
  id: number;
  title: string;
}
