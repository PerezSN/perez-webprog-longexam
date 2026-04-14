import Button from '../../components/Button';
import gbanner from '../../assets/img/gbanner.jpg';
import gamerelbanner from '../../assets/img/gamerel_banner.jpg';
import gameperibanner from '../../assets/img/game_peri.jpg';
import gapparel from '../../assets/img/gapparel.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-10 bg-zinc-950">

            {/* HERO SECTION */}
            <section className="relative min-h-[32rem] overflow-hidden">
                <img
                    src={gbanner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                <div className="relative z-10 flex min-h-[32rem] items-center justify-end px-6">
                    <div className="max-w-xl text-right">
                        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-indigo-400">
                            Gaming Merchandise Store
                        </p>

                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                            Enter the World of <span className="text-indigo-500">GameSphere</span>
                        </h1>

                        <p className="mt-4 text-zinc-300">
                            Discover exclusive gaming gear, collectibles, and premium merchandise built for true gamers.
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button to="/products">Shop Now</Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* STATS SECTION */}
            <section className="px-6">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        { value: "08", label: "Products" },
                        { value: "06", label: "Categories" },
                        { value: "24", label: "Orders" },
                        { value: "03", label: "Pickup Slots" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-zinc-900 p-6 text-center border border-zinc-800 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
                        >
                            <p className="text-3xl font-bold text-white">{item.value}</p>
                            <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* FEATURED PRODUCTS */}
            <section className="px-6 pb-10">
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
                        Shop
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                        Featured Products
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    {/* CARD */}
                    {[
                        {
                            img: gamerelbanner,
                            title: "Latest Game Release",
                            desc: "Get the latest game release with exclusive items and collectibles.",
                            btn: "View Products"
                        },
                        {
                            img: gameperibanner,
                            title: "Gaming Peripherals",
                            desc: "Upgrade your setup with high-performance gaming accessories.",
                            btn: "Shop Supplies"
                        },
                        {
                            img: gapparel,
                            title: "Gaming Apparel",
                            desc: "Wear your passion with stylish gaming-themed apparel.",
                            btn: "View Apparel"
                        }
                    ].map((item, index) => (
                        <article
                            key={index}
                            className="group rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden transition hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-zinc-400">
                                    {item.desc}
                                </p>

                                <Button to="/products" className="mt-4" variant="primary">
                                    {item.btn}
                                </Button>
                            </div>
                        </article>
                    ))}

                </div>
            </section>

        </div>
    );
};

export default HomePage;