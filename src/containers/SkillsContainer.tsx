import React from "react";

const SKILLS = [
  [
    "Python",
    "Flask",
    "Django",
    "Typed Python",
    "Alembic",
    "SQLAlchemy",
    "Scheduler",
  ],
  ["PHP", "Laravel", "Lumen"],
  ["Firebase", "MySQL", "PostgreSQL"],
  ["React Native", "Mobx", "Redux", "Jotai", "Flutter", "BLoC"],
  ["JavaScript", "TypeScript", "React", "Vite", "Eslint", "Prettier"],
  ["Linux", "Nginx", "Lets Encrypt", "Docker"],
  ["Git", "GitHub", "GitLab"],
  ["HTML", "CSS", "LESS", "SASS"],
];

function SkillsContainer() {
  return (
    <div className={"container mx-auto"}>
      <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
        Навыки
      </h1>

      {SKILLS.map((g, groupIdx) => (
        <div key={groupIdx} className={"text-center my-3"}>
          {g.map((o, i) => (
            <React.Fragment key={o}>
              <span>{o}</span>
              {i + 1 !== g.length && (
                <span className={"mx-2 text-gray-500"}>•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SkillsContainer;
