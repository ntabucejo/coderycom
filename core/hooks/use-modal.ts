import type { State } from "@core/types/modal";
import { useState } from "react";

const useModal = () => {
  let [state, setState] = useState<State>("hide");

  const handleClose = () => {
    setState("hide");
  };

  const handleOpen = () => {
    setState("show");
  };

  return { state, handleClose, handleOpen };
};

export default useModal;
