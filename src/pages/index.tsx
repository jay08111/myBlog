import * as React from "react";
import "../style.css";
import styled from "@emotion/styled";
import NavBar from "components/NavBar";
import MyInformation from "components/MyInformation";
// import Content from "components/Content";
import { graphql, PageProps } from "gatsby";
import { GraphQlResut, Posts } from "../types";
const IndexPage: React.FC<PageProps<GraphQlResut>> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log("posts", posts);
  return (
    <>
      <NavBar />
      <MainContainer className="grid p-0 pr-8 pl-20 mt-8">
        {/* <Content data={posts} /> */}
        {/* {posts.map((item , index : number) => {
          return <div key={index}>{item}</div>;
        })} */}
        <MyInformation />
      </MainContainer>
    </>
  );
};

export default IndexPage;
const MainContainer = styled.main`
  grid-template-columns: 3fr 1fr;
`;
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        html
        frontmatter {
          date
          desc
          img
          slug
          title
        }
      }
    }
  }
`;
