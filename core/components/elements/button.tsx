"use client";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  onClick = () => {},
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "border border-primary-brand bg-primary-brand text-primary-light hover:brightness-90"
          : ""
      } ${
        variant === "secondary"
          ? "border border-primary-brand text-primary-brand hover:bg-primary-brand hover:text-primary-light"
          : ""
      } ${
        className ? className : ""
      } clearance whitespace-nowrap rounded text-sm font-bold transition-all duration-300`}>
      {children}
    </button>
  );
};

export default Button;
