import Button from '../../components/Button';
import aboutbanner from '../../assets/img/aboutbanner.jpg';
import cdessert from '../../assets/img/c_dessert.jpg';
import drg from '../../assets/img/drg.jpg';
import mouse from '../../assets/img/mouse.jpg';
import gameapparel from '../../assets/img/gapparel.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-10 text-white">

      {/* HERO / ABOUT INTRO */}
      <section className="px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800">
            <img
              src={aboutbanner}
              alt="GameSphere"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
              About Store
            </p>

            <h1 className="mt-2 text-4xl font-bold leading-tight">
              Welcome to <span className="text-indigo-500">GameSphere</span>
            </h1>

            <p className="mt-4 text-zinc-400 max-w-lg leading-7">
              GameSphere Shop is your one-stop destination for gaming merchandise,
              collectibles, and exclusive items. We bring together premium gear,
              stylish apparel, and must-have accessories for gamers who want more
              than just the basics.
            </p>

            <div className="mt-6 flex gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            { value: "08", label: "Items" },
            { value: "06", label: "Categories" },
            { value: "03", label: "Pickup Slots" },
            { value: "24", label: "Orders" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center rounded-2xl bg-zinc-900 border border-zinc-800 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* PROCESS + GALLERY */}
      <section className="px-6 pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* PROCESS */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
              Store Process
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              How GameSphere Works
            </h2>

            <div className="mt-6 space-y-4">

              {[
                {
                  title: "Curated Catalog",
                  desc: "Products are carefully selected to match gamer needs and trends."
                },
                {
                  title: "Simple Checkout",
                  desc: "Clean product pages with easy navigation and fast checkout."
                },
                {
                  title: "Pickup Ready",
                  desc: "Quick updates and organized pickup system for convenience."
                }
              ].map((item, index) => (
                <article
                  key={index}
                  className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 transition hover:shadow-md hover:shadow-indigo-500/20"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                </article>
              ))}

            </div>
          </div>


          {/* GALLERY */}
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
              Gallery
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">

              {[cdessert, drg, mouse, gameapparel].map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}

            </div>

            <Button to="/products" className="mt-5 w-full">
              View Products
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;