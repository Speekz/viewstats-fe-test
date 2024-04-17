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
};

const initModalContext = {
  showDeleteTask: false,
  setShowDeleteTask: () => {},
  showCreateTask: false,
  setShowCreateTask: () => {},
};

export const ModalContext = createContext<TModalContext>(initModalContext);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false);
  const [showCreateTask, setShowCreateTask] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        showDeleteTask,
        setShowDeleteTask,
        showCreateTask,
        setShowCreateTask,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
