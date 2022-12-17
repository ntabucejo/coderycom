import Link from "next/link";

type Props = {
  name: string;
  href: string;
};

const Route = ({ name, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className="text-primary-dark/fade hover:text-primary-dark">
        {name}
      </Link>
    </li>
  );
};

export default Route;
