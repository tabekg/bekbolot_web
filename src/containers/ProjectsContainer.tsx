import { Link } from "react-router-dom";
import { PROJECTS } from "../config.tsx";

const PLATFORM_COLORS: Record<string, string> = {
  ios: "border-blue-400 text-blue-600 bg-blue-50",
  android: "border-green-400 text-green-600 bg-green-50",
  web: "border-purple-400 text-purple-600 bg-purple-50",
};

function ProjectsContainer() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl my-5 text-center text-gray-800 font-bold">
        Проекты
      </h1>

      <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((g) => (
          <Link
            key={g.slug}
            to={`/projects/${g.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <img
              alt={g.title}
              width="100%"
              className="bg-gray-50 aspect-square object-contain object-center"
              src={g.image}
            />
            <div className="p-3 flex flex-row gap-2 items-center">
              <div className="font-medium">{g.title}</div>
              {g.platforms.map((l) => (
                <div
                  key={l}
                  className={`p-1 px-3 text-xs rounded-full border ${PLATFORM_COLORS[l] || ""}`}
                >
                  {l.toUpperCase()}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
