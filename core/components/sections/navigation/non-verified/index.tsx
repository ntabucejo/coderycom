import Logo from "@core/components/elements/logo";
import SignIn from "@core/components/modals/sign-in";
import { NavLinks } from "@core/constants/navlinks/non-verified/homepage";
import NonVerifiedSidebar from "../../side-navigation/non-verified";
import Route from "../route";
import Search from "../search";

const NonVerifiedNavigationBar = () => {
  return (
    <nav className="contain relative grid grid-cols-[auto,1fr,auto] items-center gap-2 text-sm tablet:gap-4 laptop:grid-cols-[auto,1fr,auto,auto] laptop:gap-10">
      {/* sidebar for mobiles */}
      <NonVerifiedSidebar />
      <Logo />
      <div className="hidden laptop:block">
        <Search />
      </div>
      {/* nav links for laptop */}
      <div className=" book:hidden laptop:block">
        <ul className="flex items-center gap-6">
          {NavLinks.map((navlink) => (
            <Route key={navlink.name} name={navlink.name} href={navlink.href} />
          ))}
        </ul>
      </div>
      <div className="ml-auto laptop:ml-0">
        <SignIn />
      </div>
    </nav>
  );
};

export default NonVerifiedNavigationBar;
