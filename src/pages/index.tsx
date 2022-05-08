import * as React from "react";
import "../style.css";
import styled from "@emotion/styled";
import NavBar from "components/NavBar";
import MyInformation from "components/MyInformation";
const IndexPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <MainContainer className="grid p-0 pr-8 pl-20 mt-8">
        <div>hey</div>
        <h1>test commit</h1>
        <MyInformation />
      </MainContainer>
    </>
  );
};

export default IndexPage;
const MainContainer = styled.main`
  grid-template-columns: 3fr 1fr;
`;
