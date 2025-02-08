import { Children, ComponentProps } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  extraClassName?: string;
} & ComponentProps<"button">;

export default function Button({
  children,
  variant,
  extraClassName = "",
}: ButtonProps) {
  let className = "px-8 py-3  ";
  className += extraClassName;

  switch (variant) {
    case "secondary":
      className +=
        "before:border-gradient before:rounded-full  relative hover:text-[#DBA623] ";

      break;

    default:
      className +=
        "transition-all ease-in-out duration-1000 bg-gradient-to-r from-[#D57C17] to-[#956836] rounded-full hover:to-[#D57C17] hover:from-[#956836]";
      break;
  }

  return <button className={`${className} `}>{children}</button>;
}
