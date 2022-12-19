import SignIn from "@core/components/modals/sign-in";
import Route from "./route";
import Search from "./search";

const Navigation = () => {
  return (
    <nav className="flex items-center gap-10 text-sm">
      <Search />
      <ul className="flex items-center gap-6">
        <Route name="Home" href="/" />
        <Route name="What's Popular" href="/" />
        <Route name="About Us" href="/" />
      </ul>
      <SignIn />
    </nav>
  );
};

export default Navigation;
