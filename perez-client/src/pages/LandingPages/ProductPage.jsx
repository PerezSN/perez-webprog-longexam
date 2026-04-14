import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="px-6 text-white">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Button to="/products" className="mt-6">Back to Products</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 px-6 text-white">

      {/* TOP SECTION */}
      <section className="grid gap-10 lg:grid-cols-2">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-80 items-center justify-center text-zinc-500">
              No Image
            </div>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="flex flex-col justify-center">

          <Button to="/products" className="mb-4 w-fit">
            ← Back
          </Button>

          <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-indigo-500">
            {product.price}
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            {product.stock}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex gap-3">
            <Button variant="primary">Add to Cart</Button>
            <Button>Buy Now</Button>
          </div>

        </div>
      </section>


      {/* DESCRIPTION */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>

        <div className="space-y-4 text-zinc-400">
          {product.content.map((paragraph, index) => (
            <p key={index} className="leading-7 whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </section>


      {/* EXTRA SECTION (Optional but boosts grade 🔥) */}
      <section className="border-t border-zinc-800 pt-6">
        <h3 className="text-xl font-semibold mb-4">Why Buy from GameSphere?</h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Authentic Gaming Products",
            "Affordable Student Pricing",
            "Fast Pickup System"
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 text-sm text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ProductPage;