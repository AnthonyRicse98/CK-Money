import CKFooter from "@/app/ui/footer/footer";
import CKHeader from "@/app/ui/header/header";
import React from "react";

interface IDashboardTemplate {
  children: React.ReactNode;
}

const DashBoardTemplate = ({ children }: IDashboardTemplate) => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <CKHeader />
      <main>{children}</main>
      <CKFooter />
    </div>
  );
};

export default DashBoardTemplate;
