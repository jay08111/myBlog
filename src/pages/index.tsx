import * as React from "react";
import "../style.css";
import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
const IndexPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <main></main>
    </>
  );
};

export default IndexPage;
const CustomNav = styled.nav`
  background-color: #37b24d;
  color: #fff;
`;
