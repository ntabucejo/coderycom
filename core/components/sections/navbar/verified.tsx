"use client";
import Avatar from "@core/components/elements/avatar";
import Button from "@core/components/elements/button";
import Divider from "@core/components/elements/divider";
import Icon from "@core/components/elements/icon";
import Logo from "@core/components/elements/logo";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import Route from "./route";
import routes from "./routes";
import Search from "./search";

type Props = {
  image: string;
};

const VerifiedNavbar = ({ image }: Props) => {
  return (
    <nav className="contain relative grid items-center gap-2 text-sm tablet:gap-4 laptop:grid-cols-[auto,1fr,auto,auto] laptop:gap-6">
      {/* sidebar for mobiles */}
      <Logo />
      <Search />
      <div className="flex items-center gap-6">
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
        <Divider />
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
