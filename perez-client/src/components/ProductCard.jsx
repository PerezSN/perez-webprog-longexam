import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20">

      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-500">
            No Image
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* CATEGORY */}
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
          {product.category} {String(index + 1).padStart(2, '0')}
        </p>

        {/* TITLE */}
        <h3 className="mt-2 text-lg font-semibold text-white">
          {product.title}
        </h3>

        {/* PRICE */}
        <p className="mt-2 text-xl font-bold text-indigo-500">
          {product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
          {product.content[0]}
        </p>

        {/* BUTTON */}
        <Button to={`/products/${product.name}`} className="mt-4 w-full">
          View Product
        </Button>

      </div>
    </article>
  );
};

export default ProductCard;