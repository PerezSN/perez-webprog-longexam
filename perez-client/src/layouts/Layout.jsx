import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <NavBar />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <Footer />
      </footer>

    </div>
  );
};

export default Layout;