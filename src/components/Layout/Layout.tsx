import React from "react";
import Navbar from "../Navbar/Navbar";

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ( {children} ) => {
  return (
    <>
        <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
