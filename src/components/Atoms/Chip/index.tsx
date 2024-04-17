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
    <div className="flex justify-center items-center bg-lime-200 py-1 px-2 rounded-xl">
      {text}
    </div>
  );
};

export default Chip;
