import React from "react";

const Chip = ({ text }: any) => {
  return (
    <div className="flex justify-center items-center bg-lime-200 py-1 px-2 rounded-xl">
      {text}
    </div>
  );
};

export default Chip;
