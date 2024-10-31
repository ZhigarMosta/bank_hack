import type { ReactNode } from "react";

type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  form?: string;
};

export const Button = (props: BtnProps) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      form={props.form}
      className="
        ease-in-out duration-300
        rounded-md
        border-l-sky-800
        bg-gradient-to-r from-cyan-500 to-blue-500
        hover:scale-95
        hover:ring-4
        p-1.5
        px-5
      "
    >
      <p className="text-white font-bold drop-shadow-2xl">{props.children}</p>
    </button>
  );
};
