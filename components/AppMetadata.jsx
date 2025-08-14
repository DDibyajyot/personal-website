const author = "Deepam Dibyajyot";
const description =
  "Deepam Dibyajyot - Software Developer & Computer Science Student at University of Waterloo. Expert in React, Next.js, Python, Machine Learning, and Full-Stack Development. Available for Spring 2025 co-op/internship opportunities.";
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
  alternates: {
    canonical: 'https://deepamdibyajyot.netlify.app',
    languages: {
      'en-US': 'https://deepamdibyajyot.netlify.app',
    },
  },
  other: {
    'preload': '/favicon.png',
  },
  keywords: [
    "Deepam Dibyajyot",
    "Deepam Dibyajyot - software developer",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Data Engineer",
    "Data Scientist",
    "Data Analyst",
    "ML developer",
    "AI developer",
    "Portfolio website",
    "Frontend Developer Portfolio",
    "Fullstack Developer Portfolio",
    "Machine Learning Engineer Portfolio",
    "ERP Systems Consultant",
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://deepamdibyajyot.netlify.app/website.png",
        width: 800,
        height: 600,
        alt: "Personal portfolio website",
      },
      {
        url: "https://deepamdibyajyot.netlify.app/website.png",
        width: 1800,
        height: 1600,
        alt: "Personal portfolio website",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

// Move viewport to a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "dark",
};
