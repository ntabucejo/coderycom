"use client";

import Button from "@core/components/elements/button";
import Logo from "@core/components/elements/logo";
import Modal from "@core/components/layouts/modal";
import useModal from "@core/hooks/use-modal";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignIn = () => {
  const { state, handleOpen, handleClose } = useModal();

  return (
    <>
      <Button variant="secondary" onClick={handleOpen}>
        Sign In
      </Button>

      <Modal
        title={<Logo />}
        state={state}
        handleClose={handleClose}
        className="grid max-w-md gap-2">
        <button
          onClick={() => signIn("google")}
          className="clearance smooth flex w-full cursor-pointer items-center justify-center gap-4 rounded border hover:-translate-y-1">
          <Image
            src="/images/logo/google.png"
            alt="google logo"
            width={24}
            height={24}
            className="object-cover"
          />
          <span>Sign in with Google</span>
        </button>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default SignIn;
