import React, { FC } from "react";
import { ETaskPriority, IStatsCard } from "./models/StatsCard.interface";
import { priorityOrder } from "./models/StatsCard.constants";
import classNames from "classnames";

interface StatsCardProps {
  item: IStatsCard;
}

/**
 * Simple cards to display specific statistics about your tasks
 *
 * @param {IStatsCard} item The data list to be rendered into the Stats Card
 * @returns A StatsCard
 */

const StatsCards: FC<StatsCardProps> = ({ item }) => {
  const parseValues = () => {
    if (item.type === "tasks:priority") {
      return item.data.sort((a, b) => {
        const priorityIndexA = priorityOrder.indexOf(a.priority as string);
        const priorityIndexB = priorityOrder.indexOf(b.priority as string);
        return priorityIndexA - priorityIndexB;
      });
    }

    if (item.type === "tasks:dueDate") {
      return item.data.sort((a, b) => {
        return (b.dueDate as number) - (a.dueDate as number);
      });
    }

    if (item.type === "tags:top") {
      return item.data.sort((a, b) => {
        return (b.count as number) - (a.count as number);
      });
    }
    return [];
  };

  return (
    <div
      key={item.name}
      className="overflow-hidden rounded-lg bg-gray-800 px-4 py-5 shadow sm:p-6"
    >
      <dt className="truncate text-sm font-medium text-gray-100">
        {item.name}
      </dt>
      {parseValues().map((data) => (
        <dd
          key={data.title}
          className="mt-1 font-semibold tracking-tight text-gray-400 cursor-pointer flex flex-row justify-between items-center hover:underline hover:decoration-solid "
        >
          <label className="text-xl">{data.title}</label>
          <label
            className={classNames({
              "text-red-400": data.priority === ETaskPriority.High,
              "text-orange-400": data.priority === ETaskPriority.Medium,
              "text-blue-400": data.priority === ETaskPriority.Low,
            })}
          >
            {data.priority}
          </label>
        </dd>
      ))}
    </div>
  );
};

export default StatsCards;
