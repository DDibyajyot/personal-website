import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind, TbBrandAsana } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {
  SiContentful,
  SiPytorch,
  SiTensorflow,
  SiSvelte,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGooglecolab,
  SiJupyter,
  SiFirebase,
  SiGooglecloud,
  SiFlask,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiAmazonaws,
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiRacket,
  SiGnubash,
  SiD3Dotjs,
  SiMongodb,
} from "react-icons/si";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
  {
    category: "Datascience",
    items: [
      { name: "Pytorch", icon: <SiPytorch size={32} /> },
      { name: "Tensorflow", icon: <SiTensorflow size={32} /> },
	  { name: "Pandas", icon: <SiPandas size={32} /> },
	  { name: "Numpy", icon: <SiNumpy size={32} /> },
	  { name: "Scikit-learn", icon: <SiScikitlearn size={32} /> },
	  { name: "Google Cloud Vision", icon: <SiGooglecloud size={32} /> },
	  { name: "Flask", icon: <SiFlask size={32} /> },
	  { name: "D3.js", icon: <SiD3Dotjs size={32} /> },




    ],
  },
  {
    category: "Front-end",
    items: [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Next", icon: <TbBrandNextjs size={32} /> },
	  { name: "Svelte", icon: <SiSvelte size={32} /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
      { name: "HTML", icon: <AiFillHtml5 size={32} /> },
      { name: "CSS", icon: <DiCss3 size={32} /> },
      { name: "JS", icon: <IoLogoJavascript size={32} /> },
      { name: "MUI", icon: <MuiIcon width={32} /> },
      { name: "Bootstrap", icon: <BsBootstrap size={32} /> },
      { name: "styled components", icon: <StyledIcon width={32} /> },
      { name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> },
      { name: "GraphQl", icon: <GrGraphQl size={32} /> },
      { name: "Contentful CMS", icon: <SiContentful size={32} /> },
	  { name: "Firebase", icon: <SiFirebase size={32} /> },
	  { name: "D3.js", icon: <SiD3Dotjs size={32} /> },
    ],
  },
  {
    category: "Languages",
    items: [
	  { name: "Python", icon: <SiPython size={32} /> },
	  { name: "Javascript", icon: <SiJavascript size={32} /> },
	  { name: "C", icon: <SiC size={32} /> },
	  { name: "C++", icon: <SiCplusplus size={32} /> },
	  { name: "Racket", icon: <SiRacket size={32} /> },
	  { name: "Bash", icon: <SiGnubash size={32} /> },
    ],
  },
  {
    category: "Other tools",
    items: [
	  { name: "AWS", icon: <SiAmazonaws size={32} /> },
	  { name: "MySQL", icon: <SiMysql size={32} /> },
	  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
      { name: "Jira", icon: <JiraIcon width={32} /> },
      { name: "Figma", icon: <FaFigma size={32} /> },
	  { name: "Asana", icon: <TbBrandAsana size={32} /> },
      { name: "Github", icon: <AiFillGithub size={32} /> },
      { name: "Gitlab", icon: <AiFillGitlab size={32} /> },
      { name: "VsCode", icon: <DiVisualstudio size={32} /> },
	  { name: "Google Colab", icon: <SiGooglecolab size={32} /> },
	  { name: "Jupyter", icon: <SiJupyter size={32} /> },
	  { name: "Postman", icon: <SiPostman size={32} /> },
	  { name: "MongoDB", icon: <SiMongodb size={32} /> },

    ],
  },
];
