import { InputHTMLAttributes } from "react";
import "../../styles/input.scss";
import { BiSearch } from "react-icons/bi";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ children, ...rest }: InputProps) => {
  return (
    <div className="input-content">
      <input className="input" {...rest}>
        {children}
      </input>
      <BiSearch size={32} />
    </div>
  );
};
