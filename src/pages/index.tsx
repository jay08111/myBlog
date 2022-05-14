import * as React from "react";
import "../style.css";
import styled from "@emotion/styled";
import NavBar from "components/NavBar";
import MyInformation from "components/MyInformation";
import { graphql, PageProps } from "gatsby";
import { GraphQlResut } from "../types";
import Posts from "components/Posts";
const IndexPage: React.FC<PageProps<GraphQlResut>> = ({ data }) => {
  const articles = data.allMarkdownRemark.nodes;
  return (
    <>
      <NavBar />
      <MainContainer className="grid p-0 pr-8 pl-20 mt-8">
        <div className="p-4">
          {articles.map((item, index: number) => (
            <Posts key={index} data={item} />
          ))}
        </div>
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
