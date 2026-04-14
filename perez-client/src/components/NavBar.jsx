import { NavLink } from 'react-router-dom';
import logog from '../assets/img/logog.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition relative',
    isActive
      ? 'text-white'
      : 'text-zinc-400 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

      {/* LOGO */}
      <NavLink to="/" className="flex items-center gap-3 group">
        <img
          src={logog}
          alt="GameSphere"
          className="h-10 w-10 rounded-full border border-zinc-700 bg-zinc-900 object-contain transition group-hover:scale-110"
        />
        <p className="text-xl font-bold text-white tracking-wide">
          Game<span className="text-indigo-500">Sphere</span>
        </p>
      </NavLink>

      {/* NAV LINKS */}
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
            {({ isActive }) => (
              <span className="relative">
                {link.label}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  } origin-left`}
                />
              </span>
            )}
          </NavLink>
        ))}
      </nav>

    </div>
  );
};

export default NavBar;