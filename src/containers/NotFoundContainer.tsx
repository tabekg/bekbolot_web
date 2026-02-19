import {Link} from "react-router-dom";

function NotFoundContainer() {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl text-gray-600 mt-4">Страница не найдена</p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-[#C68E52] text-white rounded hover:bg-[#b07d47] transition-colors"
      >
        На главную
      </Link>
    </div>
  );
}

export default NotFoundContainer;
