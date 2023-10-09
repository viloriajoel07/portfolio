import { ButtonHTMLAttributes, FC } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickEvent?: () => void;
  typeStyle?: "Gradient" | "Simple" | "outline";
  children: React.ReactNode;
}

const Button: FC<buttonProps> = ({
  clickEvent,
  children,
  className,
  typeStyle = "Simple",
  ...props
}) => {
  const setClassDefault = {
    Gradient:
      "text-white bg-gradient-to-b bg-gradient-to-b from-[#D66EFB] to-[#940FC2] font-medium px-5 py-2.5 text-center mr-2 mb-2 rounded-full",
    Simple:
      "px-4 py-2 text-slate-950 font-semibold rounded-md bg-white/80 hover:shadow-2xl hover:shadow-white/10",
    outline:
      "px-4 py-2 text-white border border-white/60 rounded-full bg-transparent text-white/60",
  }[typeStyle];

  return (
    <button
      type="button"
      onClick={clickEvent}
      className={`${setClassDefault} ${className} flex items-center justify-center`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
