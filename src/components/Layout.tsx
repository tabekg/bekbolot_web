import {NavLink, Outlet} from "react-router-dom";

const NAV_LINKS = [
  {label: 'Обо мне', to: '/about-me'},
  {label: 'Проекты', to: '/projects'},
  {label: 'Навыки', to: '/skills'},
];

function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#CED3C5]/90 backdrop-blur border-b border-gray-400/30">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-lg font-semibold text-gray-800 hover:text-[#C68E52] transition-colors">
            Бекболот Тажибаев
          </NavLink>
          <div className="flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({isActive}) =>
                  `px-3 py-1.5 rounded text-sm transition-colors ${
                    isActive
                      ? 'bg-[#C68E52] text-white'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-[#C68E52]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              className="px-3 py-1.5 rounded text-sm text-gray-700 hover:bg-amber-50 hover:text-[#C68E52] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Резюме
            </a>
          </div>
        </nav>
      </header>
      <main className="pb-10">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
