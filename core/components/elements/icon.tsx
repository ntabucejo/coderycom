type Props = {
  Icon: any;
};
const Icon = ({ Icon }: Props) => {
  return (
    <Icon className="h-6 w-6 cursor-pointer text-primary-dark/fade hover:text-primary-dark smooth" />
  );
};

export default Icon;
