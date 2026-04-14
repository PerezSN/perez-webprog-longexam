import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex flex-col gap-10 px-6 text-white">

      {/* HERO / HEADER */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
            Products
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Explore GameSphere Store
          </h1>

          <p className="mt-4 max-w-lg text-zinc-400">
            Browse our collection of gaming merchandise, collectibles,
            and exclusive items designed for gamers.
          </p>

          <div className="mt-6">
            <Button to="/">← Back Home</Button>
          </div>
        </div>
      </section>


      {/* PRODUCT LIST */}
      <section>
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
              Featured Products
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Popular Items
            </h2>
          </div>

          {/* Optional filter placeholder */}
          <div className="text-sm text-zinc-400">
            Showing {products.length} items
          </div>

        </div>

        {/* PRODUCT GRID */}
        <ProductList products={products} />
      </section>

    </div>
  );
};

export default ProductListPage;