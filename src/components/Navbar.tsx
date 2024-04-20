import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuToggler = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', title: 'Start a search' },
    { path: '/my-job', title: 'My jobs' },
    { path: '/salary', title: 'Salary Estimate' },
    { path: '/post-job', title: 'Post a job' },
  ];

  return (
    <header className="w-full py-8 mb-2">
      <nav className="md:max-w-screen-2xl mx-auto px-4 md:px-2 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl text-black">
          <Logo />
          <span className="font-medium">Oportunia Job</span>
        </Link>

        {/* nav items for larges devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <li key={item.path} className="text-base text-primary">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-base text-primary font-medium space-x-5 hidden md:block">
          <Link to={'/login'} className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to={'/sign-up'}
            className="py-2 px-5 bg-secondary text-white rounded"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>

      {/* NavItems for mobile */}
      <div className={`mt-10 ${isMenuOpen ? 'block' : 'hidden'} transition`}>
        <ul className="flex flex-col justify-center items-center gap-y-4">
          {navItems.map((item) => (
            <li key={item.path} className="text-base text-primary">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to={'/login'}>Log in</Link>
          </li>
          <li>
            <Link to={'/sign-up'}>Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
