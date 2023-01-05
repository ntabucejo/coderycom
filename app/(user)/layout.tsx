import NavigationBar from "@core/components/sections/navbar";
import Providers from "@core/providers";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Providers>
      <div>
        <header className="sticky top-0 z-50 bg-primary-light shadow">
          {/* @ts-ignore */}
          <NavigationBar />
        </header>
        <main className="grid grid-rows-[auto,1fr] gap-2">
          <section className="bg-gray-500">{children}</section>
        </main>
      </div>
    </Providers>
  );
};

export default Layout;
