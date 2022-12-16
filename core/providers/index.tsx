import Session from "./session";
import Query from "./query";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <Session>
      <Query>{children}</Query>
    </Session>
  );
};

export default Providers;
