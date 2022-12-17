import type { State } from "@core/types/modal";
import { useState } from "react";

const useModal = (initialState: State = "hide") => {
  let [state, setState] = useState<State>(initialState);

  const handleClose = () => {
    setState("hide");
  };

  const handleOpen = () => {
    setState("show");
  };

  return { state, handleClose, handleOpen };
};

export default useModal;
