import React from "react";

interface IDashboardTemplate {
  children: React.ReactNode;
}

const DashBoardTemplate = ({ children }: IDashboardTemplate) => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default DashBoardTemplate;
