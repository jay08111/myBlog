import * as React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { IconType } from "./types";
export const icons: IconType[] = [
  {
    id: 1,
    icon: <AiFillGithub />,
    url: "https://github.com/jay08111/",
  },
  {
    id: 2,
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <AiOutlineLinkedin />,
    url: "https://www.linkedin.com/in/%ED%98%B8%EC%97%B0-%EB%B3%80-69562a233/",
  },
];
