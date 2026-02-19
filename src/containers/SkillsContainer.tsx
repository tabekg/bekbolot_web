const SKILLS = [
  [
    "Python",
    "FastAPI",
    "Flask",
    "Django",
    "Typed Python",
    "Alembic",
    "SQLAlchemy",
    "Scheduler",
  ],
  ["PHP", "Laravel", "Lumen"],
  ["PostgreSQL", "MySQL", "Redis", "Firebase"],
  ["React Native", "Mobx", "Redux", "Jotai", "Flutter", "BLoC"],
  ["JavaScript", "TypeScript", "React", "Vite", "Eslint", "Prettier"],
  [
    "WebSocket",
    "Pusher",
    "HTTP/2",
    "AI Integrations",
    "WhatsApp Web API",
    "WhatsApp Business API",
  ],
  ["Linux", "Nginx", "Docker", "Cloudflare", "Cloudinary", "Let's Encrypt"],
  ["Git", "GitHub Actions", "GitLab CI/CD"],
  ["HTML", "CSS", "LESS", "SASS"],
];

function SkillsContainer() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl my-5 text-center text-gray-800 font-bold">
        Навыки
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {SKILLS.map((g, groupIdx) => (
          <div
            key={groupIdx}
            className={`flex flex-wrap gap-2 justify-center py-3 ${groupIdx < SKILLS.length - 1 ? "border-b border-gray-300/50" : ""}`}
          >
            {g.map((o) => (
              <span
                key={o}
                className="bg-white/70 rounded-full px-3 py-1 text-sm shadow-sm"
              >
                {o}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsContainer;
