interface ButtonProps {
  children: JSX.Element;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;