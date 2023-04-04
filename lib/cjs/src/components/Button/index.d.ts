/// <reference types="react" />
interface ButtonProps {
    children: JSX.Element;
    onClick?: () => void;
}
declare const Button: ({ children, onClick }: ButtonProps) => JSX.Element;
export default Button;
