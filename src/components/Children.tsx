import { ReactNode } from "react";

type ChildProps = {
  children: ReactNode;
};

const Children = ({ children }: ChildProps) => {
  return <> salom {children}</>;
};

export default Children;
