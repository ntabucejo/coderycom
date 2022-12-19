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
        className="cursor-pointer whitespace-nowrap text-primary-dark/fade transition-all duration-300 hover:text-primary-dark">
        {name}
      </Link>
    </li>
  );
};

export default Route;
