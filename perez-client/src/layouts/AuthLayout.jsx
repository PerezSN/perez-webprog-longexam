import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">

      <div className="grid min-h-screen w-full lg:grid-cols-2">

        {/* LEFT SIDE - BRAND / VISUAL */}
        <div className="relative flex items-center justify-center border-b border-zinc-800 lg:border-b-0 lg:border-r">

          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-zinc-950 to-zinc-950" />

          {/* Content */}
          <div className="relative z-10 text-center px-10">

            <h1 className="text-4xl font-bold">
              Game<span className="text-indigo-500">Sphere</span>
            </h1>

            <p className="mt-4 text-zinc-400 max-w-sm mx-auto text-sm leading-6">
              Your gateway to gaming merchandise, collectibles, and exclusive drops.
            </p>

            {/* Decorative circle */}
            <div className="mt-10 flex justify-center">
              <div className="relative h-56 w-56 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur">
                <div className="absolute inset-6 rounded-full border border-indigo-500/30 animate-pulse" />
                <div className="absolute inset-12 rounded-full border border-zinc-700" />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - AUTH FORM */}
        <main className="flex items-center justify-center px-6 py-12">

          <div className="w-full max-w-md">

            <Outlet />

          </div>

        </main>

      </div>
    </section>
  );
};

export default AuthLayout;