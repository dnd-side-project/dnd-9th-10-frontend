import * as React from "react";

export interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return <div>Button</div>;
}
