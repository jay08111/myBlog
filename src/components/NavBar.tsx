import * as React from "react";
import styled from "@emotion/styled";
const NavBar: React.FC = () => {
  return (
    <>
      <CustomNav className="text-center p-3 text-2xl text-white">
        <h1>Front-end Development</h1>
      </CustomNav>
    </>
  );
};

export default NavBar;
const CustomNav = styled.nav`
  background-color: #2f9e44;
`;
