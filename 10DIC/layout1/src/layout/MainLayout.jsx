import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <div>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </div>
    </div>
  );
};

export default MainLayout;
