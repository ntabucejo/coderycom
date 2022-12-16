import Providers from "@core/providers";
import "@core/styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body className={`${inter.className}`}>{children}</body>
      </Providers>
    </html>
  );
};

export default Layout;
