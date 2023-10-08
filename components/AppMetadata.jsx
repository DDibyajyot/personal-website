const author = "Deepam Dibyajyot";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://deepamdibyajyot.netlify.app";
export const AppMetadata = {
  metadataBase: new URL("https://deepamdibyajyot.netlify.app/"),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`,
  },
  description: description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Deepam Dibyajyot",
    "Deepam Dibyajyot - software developer",
    "Frontend developer",
    "Fullstack developer",
    "Data Engineer",
    "Data Scientise",
    "Data Analayst",
    "ML developer",
    "AI developer",
    "Portfolio website",
    "Frontend Developer Portfolio",
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  colorScheme: "dark",
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://deepamdibyajyot.netlify.app/public/assets/projects/website.png",
        width: 800,
        height: 600,
        alt: "Personal portfolio website",
      },
      {
        url: "https://deepamdibyajyot.netlify.app/public/assets/projects/website.png",
        width: 1800,
        height: 1600,
        alt: "Personal portfolio website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
