import Navigation from "@core/components/sections/navigation";
import Providers from "@core/providers";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Providers>
      <div>
        <header className="sticky top-0 z-50 bg-primary-light shadow">
          <Navigation />
        </header>
        <main>{children}</main>
      </div>
    </Providers>
  );
};

export default Layout;
