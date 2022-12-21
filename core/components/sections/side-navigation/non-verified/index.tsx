"use client";
import Logo from "@core/components/elements/logo";
import SignIn from "@core/components/modals/sign-in";
import { NavLinks } from "@core/constants/navlinks/non-verified/homepage";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Route from "../../navigation/route";

const NonVerifiedSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="laptop:hidden">
      <Bars3BottomLeftIcon
        onClick={() => setOpen(!open)}
        className="mr-4 h-5 w-5 cursor-pointer"
      />
      {/* navlinks  */}
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="absolute inset-0 h-screen bg-black/50 ">
          <div className="absolute top-0 left-0 flex min-h-screen w-96 animate-fadeIn flex-col gap-6 bg-white px-4 py-4 shadow shadow-lg">
            <Logo />
            <ul className="flex flex-col items-start gap-6">
              {NavLinks.map((navlink) => (
                <Route
                  key={navlink.name}
                  name={navlink.name}
                  href={navlink.href}
                />
              ))}
            </ul>
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};

export default NonVerifiedSidebar;
