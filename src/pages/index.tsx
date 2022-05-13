import * as React from "react";
import "../style.css";
import styled from "@emotion/styled";
import NavBar from "components/NavBar";
import MyInformation from "components/MyInformation";
import { graphql, PageProps } from "gatsby";
import { GraphQlResut } from "../types";
const IndexPage: React.FC<PageProps<GraphQlResut>> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log("posts", posts);
  return (
    <>
      <NavBar />
      <MainContainer className="grid p-0 pr-8 pl-20 mt-8">
        <div>
          {posts.map(({ html, frontmatter }, index: number) => {
            const { date, desc, img, slug, title } = frontmatter;
            return (
              <div key={index}>
                <h1>{html}</h1>
                <h2>{date}</h2>
              </div>
            );
          })}
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
