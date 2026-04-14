import Button from '../components/Button';

const NotFoundPage = () => {
  return (
  <div className="min-h-screen w-full bg-zinc-950 text-white flex flex-col gap-10 px-6">

      {/* ERROR HERO */}
      <section className="text-center py-16">

        <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
          Error
        </p>

        <h1 className="text-8xl font-bold mt-4 text-white">
          404
        </h1>

        <p className="mt-4 text-zinc-400 text-lg max-w-md mx-auto">
          Page not found. The page you're looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Button to="/">Back Home</Button>
          <Button to="/products" variant="primary">
            View Products
          </Button>
        </div>

      </section>


      {/* QUICK LINKS */}
      <section className="max-w-3xl mx-auto w-full">

        <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
          Quick Links
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Explore GameSphere
        </h2>

        <div className="mt-6 space-y-4">

          {/* HOME */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:shadow-lg hover:shadow-indigo-500/20 transition">
            <h3 className="font-semibold text-white">Home</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Return to the homepage
            </p>
            <Button to="/" className="mt-4">
              Go Home
            </Button>
          </div>

          {/* PRODUCTS */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:shadow-lg hover:shadow-indigo-500/20 transition">
            <h3 className="font-semibold text-white">Products</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Browse all featured store items
            </p>
            <Button to="/products" className="mt-4" variant="primary">
              View Products
            </Button>
          </div>

        </div>

      </section>

    </div>
  );
};

export default NotFoundPage;