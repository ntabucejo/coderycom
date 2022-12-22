"use client";
import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import Divider from "@core/components/elements/divider";
import Icon from "@core/components/elements/icon";
import Logo from "@core/components/elements/logo";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import Sidebar from "../sidebar";
import Route from "./route";
import routes from "./routes";
import Search from "./search";

type Props = {
  image: string;
};

const VerifiedNavbar = ({ image }: Props) => {
  return (
    <nav className="contain relative grid grid-cols-[1fr,auto,auto] items-center gap-5 text-sm laptop:grid-cols-[auto,1fr,auto,auto] laptop:gap-6">
      <Logo />
      {/* search only for laptop version */}
      <div className="book:hidden laptop:block">
        <Search />
      </div>
      <div className="flex items-center gap-4 laptop:gap-6">
        {/* navlinks for laptop */}
        <div className="book:hidden laptop:block">
          <ul className="flex items-center gap-6">
            {routes
              .filter((route) => !route.isPrivate)
              .map((route) => (
                <Route key={route.name} name={route.name} href={route.href} />
              ))}
          </ul>
        </div>
        <div className="book:hidden laptop:block">
          <Divider />
        </div>
        <span className="smooth cursor-pointer text-sm font-semibold text-primary-dark/fade hover:text-primary-dark">
          Orders
        </span>
        <Icon Icon={EnvelopeIcon} />
        <Icon Icon={BellIcon} />
      </div>
      <Avatar image={image} />
    </nav>
  );
};

export default VerifiedNavbar;
