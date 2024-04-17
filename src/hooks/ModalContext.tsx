import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type TModalContext = {
  showDeleteTask: boolean;
  setShowDeleteTask: Dispatch<SetStateAction<boolean>>;
  showCreateTask: boolean;
  setShowCreateTask: Dispatch<SetStateAction<boolean>>;
  showUpdateTask: boolean;
  setShowUpdateTask: Dispatch<SetStateAction<boolean>>;
};

const initModalContext = {
  showDeleteTask: false,
  setShowDeleteTask: () => {},
  showCreateTask: false,
  setShowCreateTask: () => {},
  showUpdateTask: false,
  setShowUpdateTask: () => {},
};

export const ModalContext = createContext<TModalContext>(initModalContext);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false);
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);
  const [showUpdateTask, setShowUpdateTask] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        showDeleteTask,
        setShowDeleteTask,
        showCreateTask,
        setShowCreateTask,
        showUpdateTask,
        setShowUpdateTask,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
