import type { ReactNode } from "react";

const Wrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-1 flex-col px-4 ${className}`}>{children}</div>
  );
};

export default Wrapper;
