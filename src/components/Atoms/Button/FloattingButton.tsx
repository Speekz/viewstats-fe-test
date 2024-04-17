"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { ModalContext } from "src/hooks/ModalContext";

const FloattingButton = () => {
  const { setShowCreateTask } = useContext(ModalContext);
  return (
    <button
      type="button"
      className="absolute right-10 bottom-10 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => setShowCreateTask(true)}
    >
      <PlusIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );
};

export default FloattingButton;
