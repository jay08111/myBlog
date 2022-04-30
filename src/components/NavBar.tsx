import * as React from "react";
import styled from "@emotion/styled";
const NavBar: React.FC = () => {
  return (
    <>
      <CustomNav className="text-center p-3 text-2xl">
        <h1>Front-end Development</h1>
      </CustomNav>
      <main></main>
    </>
  );
};

export default NavBar;
const CustomNav = styled.nav`
  background-color: #37b24d;
  color: #fff;
`;
