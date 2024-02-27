import {Link} from "react-router-dom";
import {PROJECTS} from "../config.tsx";

function ProjectsContainer() {
  return (
    <>
      <div className={'container mx-auto'}>
        <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
          Проекты
        </h1>

        <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map(g => (
            <>

              <Link to={`/projects/${g.slug}`} className={'bg-red-50 rounded overflow-hidden'}>
                <img alt={g.title} width={'100%'} className={'bg-white aspect-square object-contain object-center'} src={g.image}/>
                <div className={'p-3 flex flex-row gap-3'}>
                  <div>{g.title}</div>
                  {g.platforms.map(l => <div className={'p-1 px-3 text-xs rounded-full border'}>{l.toUpperCase()}</div>)}
                </div>
              </Link>

            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectsContainer
