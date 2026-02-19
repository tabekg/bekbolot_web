import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer.tsx";
import AboutMeContainer from "./containers/AboutMeContainer.tsx";
import ProjectsContainer from "./containers/ProjectsContainer.tsx";
import ProjectContainer from "./containers/ProjectContainer.tsx";
import SkillsContainer from "./containers/SkillsContainer.tsx";
import NotFoundContainer from "./containers/NotFoundContainer.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/about-me",
        element: <AboutMeContainer />,
      },
      {
        path: "/projects",
        element: <ProjectsContainer />,
      },
      {
        path: "/projects/:slug",
        element: <ProjectContainer />,
      },
      {
        path: "/skills",
        element: <SkillsContainer />,
      },
      {
        path: "*",
        element: <NotFoundContainer />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
