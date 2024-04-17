import React, { FC } from "react";

interface ChipProps {
  text: string;
}

/**
 * The chip component will render lists of strings in a nicer way to be presented in the task list page or any other site.
 *
 * @param {string} text The text to be displayed on the chip
 * @returns A chip
 */

const Chip: FC<ChipProps> = ({ text }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
      {text}
    </span>
  );
};

export default Chip;
