import Logo from "@core/components/elements/logo";
import SignIn from "@core/components/modals/sign-in";
import Sidebar from "../sidebar";
import Route from "./route";
import routes from "./routes";
import Search from "./search";

const NonverifiedNavbar = () => {
  return (
    <nav className="contain relative grid grid-cols-[auto,1fr,auto] items-center gap-2 text-sm tablet:gap-4 laptop:grid-cols-[auto,1fr,auto,auto] laptop:gap-10">
      {/* sidebar for mobiles */}
      <Sidebar />
      <Logo />
      <div className="hidden laptop:block">
        <Search />
      </div>
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
      <div className="ml-auto laptop:ml-0">
        <SignIn />
      </div>
    </nav>
  );
};

export default NonverifiedNavbar;
