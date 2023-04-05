import React from "react";
import "./button.css";

interface Props {
  primary: boolean;
  children: any;
}

export default function MyButton({ primary, children }: Props) {
  return (
    <button className={`btn ${ primary ? 'primary' : null }` }>
      {children}
    </button>
  );
}
