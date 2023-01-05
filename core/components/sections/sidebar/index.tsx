"use client";
import Logo from "@core/components/elements/logo";
import SignIn from "@core/components/modals/sign-in";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Route from "../navbar/route";
import routes from "../navbar/routes";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("");

  return (
    <div className="laptop:hidden">
      <Bars3BottomLeftIcon
        onClick={() => {
          setOpen(true);
          setStyle("animate-fadeIn");
        }}
        className="mr-4 h-6 w-6 cursor-pointer"
      />
      {/* navlinks  */}
      {open && (
        <div
          onClick={() => {
            setStyle("animate-fadeOut");
          }}
          className="absolute inset-0 h-screen bg-black/50">
          <div
            onClick={() => {
              setStyle("animate-fadeOut");
              setOpen(false);
            }}
            className={`${style} absolute top-0 left-0 flex min-h-screen w-96 animate-fadeIn flex-col gap-6 bg-white px-4 py-4 shadow shadow-lg`}>
            <Logo />
            <ul className="flex flex-col items-start gap-6">
              {routes
                .filter((route) => !route.isPrivate)
                .map((route) => (
                  <Route key={route.name} name={route.name} href={route.href} />
                ))}
            </ul>
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
