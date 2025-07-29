import type { ReactNode } from "react";

const Content = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className={`flex flex-1 overflow-auto py-4 ${className}`}>
      {children}
    </main>
  );
};

export default Content;
