export interface IconType {
  id: number;
  icon: JSX.Element;
  url: string;
}
export interface Posts {}

export type nodesType = {
  html: String;
  frontmatter: {
    date: Number;
    desc: String;
    img: String;
    slug: Number;
    title: String;
  };
};

export type GraphQlResut = {
  allMarkdownRemark: {
    nodes: nodesType;
  };
};
