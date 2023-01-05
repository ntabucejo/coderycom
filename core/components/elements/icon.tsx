type Props = {
  Icon: React.ElementType;
};
const Icon = ({ Icon }: Props) => {
  return (
    <Icon className="smooth h-6 w-6 cursor-pointer text-primary-dark/fade hover:text-primary-dark" />
  );
};

export default Icon;
