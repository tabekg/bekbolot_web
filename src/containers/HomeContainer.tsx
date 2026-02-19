import React from "react";
import photo from "../assets/photo.jpg";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const LINKS = [
  { label: "Обо мне", link: "/about-me" },
  { label: "Проекты", link: "/projects" },
  { label: "Навыки", link: "/skills" },
  { label: "Резюме", href: "/resume.pdf" },
];

function HomeContainer() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-6 animate-fadeIn">
      <img
        src={photo}
        alt={"Bekbolot Tazhibaev"}
        className="rounded-full w-40 shadow-xl ring-4 ring-white/50"
      />
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Бекболот Тажибаев
      </h1>
      <div className="text-lg text-center text-gray-600">
        Full Stack разработчик с опытом более 6 лет.
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {LINKS.map((g) => (
          <React.Fragment key={g.label}>
            {g.link ? (
              <Link
                className="border border-[#C68E52] text-[#C68E52] hover:bg-[#C68E52] hover:text-white transition-colors px-4 py-2 rounded-lg"
                to={g.link}
              >
                {g.label}
              </Link>
            ) : (
              <a
                className="border border-[#C68E52] text-[#C68E52] hover:bg-[#C68E52] hover:text-white transition-colors px-4 py-2 rounded-lg"
                href={g.href}
              >
                {g.label}
              </a>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-row gap-3">
        <SocialIcon
          url="https://t.me/tabekg"
          title="Telegram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://github.com/tabekg"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://instagram.com/bekaaakg"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="mailto:tabekg@gmail.com"
          title="Email"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://wa.me/996777171171"
          network="whatsapp"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </div>
  );
}

export default HomeContainer;
