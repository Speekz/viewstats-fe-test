import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ETaskPriority } from "src/components/Atoms/StatsCard/models/StatsCard.interface";
import { ITaskCard } from "src/components/Atoms/TaskCard/models/TaksCard.interface";

export type TModalContext = {
  showDeleteTask: boolean;
  setShowDeleteTask: Dispatch<SetStateAction<boolean>>;
  showCreateTask: boolean;
  setShowCreateTask: Dispatch<SetStateAction<boolean>>;
  showUpdateTask: boolean;
  setShowUpdateTask: Dispatch<SetStateAction<boolean>>;
  taskDetails: ITaskCard;
  setTaskDetails: Dispatch<SetStateAction<ITaskCard>>;
};

const initModalContext = {
  showDeleteTask: false,
  setShowDeleteTask: () => {},
  showCreateTask: false,
  setShowCreateTask: () => {},
  showUpdateTask: false,
  setShowUpdateTask: () => {},
  taskDetails: {
    id: 0,
    title: "",
    description: "",
    priority: ETaskPriority.Low,
    dueDate: 0,
    tags: [],
  },
  setTaskDetails: () => {},
};

export const ModalContext = createContext<TModalContext>(initModalContext);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showDeleteTask, setShowDeleteTask] = useState<boolean>(
    initModalContext.showDeleteTask
  );
  const [showCreateTask, setShowCreateTask] = useState<boolean>(
    initModalContext.showCreateTask
  );
  const [showUpdateTask, setShowUpdateTask] = useState<boolean>(
    initModalContext.showUpdateTask
  );
  const [taskDetails, setTaskDetails] = useState<ITaskCard>(
    initModalContext.taskDetails
  );

  return (
    <ModalContext.Provider
      value={{
        showDeleteTask,
        setShowDeleteTask,
        showCreateTask,
        setShowCreateTask,
        showUpdateTask,
        setShowUpdateTask,
        taskDetails,
        setTaskDetails,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
