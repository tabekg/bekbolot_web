import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeContainer from "./containers/HomeContainer.tsx";
import AboutMeContainer from "./containers/AboutMeContainer.tsx";
import ProjectsContainer from "./containers/ProjectsContainer.tsx";
import ProjectContainer from "./containers/ProjectContainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer/>,
  },
  {
    path: "/about-me",
    element: <AboutMeContainer/>,
  },
  {
    path: "/projects",
    element: <ProjectsContainer/>,
  },
  {
    path: "/projects/:slug",
    element: <ProjectContainer/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
