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
    <html>
      <head />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default Layout;
