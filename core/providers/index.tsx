import Session from "./session";
import Data from "./data";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Session>
      <Data>{children}</Data>
    </Session>
  );
};

export default Providers;
