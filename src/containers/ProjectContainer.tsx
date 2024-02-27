import {useParams} from "react-router-dom";
import {PROJECTS} from "../config.tsx";
import {useMemo} from "react";

function ProjectContainer() {
  const {slug} = useParams()

  const project = useMemo(() => {
    return PROJECTS.find(g => g.slug == slug)
  }, [slug])

  if (!project) {
    return (
      <>
        <div className={'container mx-auto'}>
          <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
            Проект не найден!
          </h1>
        </div>
      </>
    )
  }

  return (
    <>
      <div className={'container mx-auto'}>
        <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
          Проект {project.title}
        </h1>

        {project.content}
      </div>
    </>
  )
}

export default ProjectContainer
