export interface IconType {
  id: number;
  icon: JSX.Element;
  url: string;
}

export type nodesType = {
  html: string;
  frontmatter: {
    date: number;
    desc: string;
    img: string;
    slug: number;
    title: string;
  };
}[];

export type ContentProps = {
  html: string;
};
export type GraphQlResut = {
  allMarkdownRemark: {
    nodes: nodesType;
  };
};
