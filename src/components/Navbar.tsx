import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="grid bg-gray-800 place-content-center">
      <p className="text-3xl text-center text-white">
        Green<span className="font-bold text-green-600">Sock</span>
      </p>
      <nav>
        <ul className="flex gap-4 text-white">
          <li className="flex-1 px-2 py-4 text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="flex-1 px-2 py-4 text-center">
            <Link to="/concepts">Conceptos</Link>
          </li>
          <li className="flex-1 px-2 py-4 text-center">
            <Link to="/components">Componentes</Link>
          </li>
          <li className="flex-1 px-2 py-4 text-center">
            <Link to="/scroll">Scroll</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
