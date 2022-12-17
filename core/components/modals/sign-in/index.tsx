"use client";

import Button from "@core/components/elements/button";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const { state, handleOpen, handleClose } = useModal();

  return (
    <>
      <Button variant="secondary" onClick={handleOpen}>
        Sign In
      </Button>

      <Modal
        title="Welcome Back"
        state={state}
        handleClose={handleClose}
        className="max-w-md">
        <button
          onClick={() => signIn("google")}
          className="clearance w-full rounded border">
          Google
        </button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default SignIn;
