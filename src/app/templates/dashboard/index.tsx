import React from "react";

interface IDashboardTemplate {
  children: React.ReactNode;
}

const DashBoardTemplate = ({ children }: IDashboardTemplate) => {
  return (
    <React.Fragment>
      <header>header</header>
      <div>{children}</div>
      <footer>footer</footer>
    </React.Fragment>
  );
};

export default DashBoardTemplate;
