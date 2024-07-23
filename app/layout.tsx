import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <div>TEST:THERE IS A CHILREN PROP DIV ABOVE</div>
      </body>
    </html>
  );
};

export default MainLayout;
