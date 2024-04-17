export type TStatsCard = "tasks:priority" | "tasks:dueDate" | "tags:top";

export interface IStatsCard {
  name: string;
  type: TStatsCard;
  data: IStatsCardData[];
}

export interface IStatsCardData {
  id: number;
  title: string;
  priority?: ETaskPriority;
  dueDate?: number;
  count?: number;
}

export enum ETaskPriority {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
}
