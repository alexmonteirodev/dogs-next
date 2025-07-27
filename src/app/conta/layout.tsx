import ContaHeader from "@/components/conta/conta-header";
import { ReactNode } from "react";

const ContaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
};

export default ContaLayout;
