"use client";
import Button from "@core/components/elements/button";
import Logo from "@core/components/elements/logo";
import Dropdown from "@core/components/layouts/dropdown";
import SignIn from "@core/components/modals/sign-in";
import { NavLinks } from "@core/constants/navlinks/homepage";
import useDropdown from "@core/hooks/use-dropdown";
import Route from "./route";
import Search from "./search";

const Navigation = () => {
  const { state, handleClose, handleOpen } = useDropdown();

  return (
    <nav className="contain flex items-center gap-2 text-sm tablet:gap-4 laptop:gap-10">
      <Logo />
      <Search />
      {/* nav links for mobile */}
      <div className="tablet:hidden">
        <Dropdown links={NavLinks} state={state} handleClose={handleClose}>
          <Button variant="primary" onClick={handleOpen}>
            Menu
          </Button>
        </Dropdown>
      </div>

      {/* nav links for laptop */}
      <div className=" book:hidden tablet:block">
        <ul className="flex items-center gap-6">
          {NavLinks.map((navlink) => (
            <Route key={navlink.name} name={navlink.name} href={navlink.href} />
          ))}
        </ul>
      </div>

      <SignIn />
    </nav>
  );
};

export default Navigation;
