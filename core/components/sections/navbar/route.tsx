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
        className="cursor-pointer whitespace-nowrap font-semibold text-primary-dark/fade smooth hover:text-primary-dark">
        {name}
      </Link>
    </li>
  );
};

export default Route;
