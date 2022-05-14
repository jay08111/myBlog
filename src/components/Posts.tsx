import React from "react";
import { Link, PageProps } from "gatsby";
import { fromUnixTime } from "date-fns";
import { nodesType } from "../types";
type IndexPageProps = PageProps<nodesType>;

const Posts: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  const formateDate = (date: number) => {
    return fromUnixTime(date).toDateString();
  };
  return (
    <div>
      {/* <Link to={"/blog/" + data.frontmatter.slug}>
        <h1>{data.frontmatter.title}</h1>
      </Link>
      <p>{formateDate(data.frontmatter.date)}</p>
      <Link to={"/blog/" + data.frontmatter.slug}>
        <p>{data.frontmatter.desc}</p>
      </Link> */}
    </div>
  );
};

export default Posts;
