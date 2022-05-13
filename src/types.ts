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
//Type '{ data: nodesType; }' is missing
// the following properties from
//type 'PageProps<nodesType, unknown, unknown, object>'
//: path, uri, location, navigate, and 5 more.
//
//
// pageResources={{
//   component: undefined,
//   json: {
//     data: undefined,
//     pageContext: undefined
//   },
//   page: {
//     componentChunkName: "",
//     path: "",
//     webpackCompilationHash: "",
//     matchPath: undefined
//   }
// }} pageContext={undefined} serverData={undefined}
