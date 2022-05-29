import {
  AboutMe,
  BlogPage,
  ContactMe,
  LandingPage,
  Projects,
} from "../../pages";
import { RequireAuth } from "./RequireAuth";

const authRoutes = [
  {
    name: "Blog",
    path: "/blog",
    element: <BlogPage />,
  },
  {
    name: "About",
    path: "/About",
    element: <AboutMe />,
  },
  {
    name: "My Projects",
    path: "/My-Project",
    element: <Projects />,
  },
  {
    name: "Contact",
    path: "/contact-me",
    element: <ContactMe />,
  },
  { name: "home", path: "/", element: <LandingPage /> },
];

const dashBoardRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <div>welcome to dashboard</div>,
  },
];
export { authRoutes, dashBoardRoutes, RequireAuth };
