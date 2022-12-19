import Navigation from "@core/components/sections/navigation";
import Providers from "@core/providers";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Providers>
      <div className="grid h-screen grid-cols-[auto,1fr] gap-2">
        <aside className="bg-gray-500">sidebar</aside>
        <main>
          <section className="grid grid-rows-[auto,1fr] gap-2">
            <header className="sticky top-0 z-50 bg-primary-light shadow">
              <Navigation />
            </header>
            <section className="bg-gray-500">{children}</section>
          </section>
        </main>
      </div>
    </Providers>
  );
};

export default Layout;
