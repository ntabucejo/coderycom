import SignIn from "@core/components/modals/sign-in";
import Route from "./route";
import Search from "./search";

const Navigation = () => {
  return (
    <nav className="contain flex items-center gap-4 text-sm">
      <h1 className="text-2xl font-bold text-primary-brand">Codery</h1>
      <Search />
      <ul className="flex items-center gap-4">
        <Route name="Explore" href="/" />
        <Route name="Popular" href="/" />
        <Route name="About" href="/" />
      </ul>
      <SignIn />
    </nav>
  );
};

export default Navigation;
