import { ButtonHTMLAttributes, FC } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickEvent?: () => void;
  classButton?: string;
  typeStyle?: "Gradient" | "Simple";
  children: React.ReactNode;
}

const Button: FC<buttonProps> = ({
  clickEvent,
  children,
  classButton,
  typeStyle = "Simple",
  ...props
}) => {
  const setClassDefault = {
    Gradient:
      "text-white bg-gradient-to-r from-cyan-600 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
    Simple:
      "px-4 py-2 text-white border border-blue-900 rounded-xl bg-blue-700",
  }[typeStyle];

  return (
    <button
      type="button"
      onClick={clickEvent}
      className={`${setClassDefault} ${classButton}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
