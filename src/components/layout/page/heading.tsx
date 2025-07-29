import type { ReactNode } from "react";

const Heading = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <header className={`border-b-2 py-4 ${className}`}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      {children}
    </header>
  );
};

export default Heading;
