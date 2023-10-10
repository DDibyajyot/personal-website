const author = "Deepam Dibyajyot";
const description =
	"Software developer studying at University of Waterloo. I thrive on working with new technologies to build exciting projects, including full-stack development. Currently, I'm exploring cloud computing and machine learning,";
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
