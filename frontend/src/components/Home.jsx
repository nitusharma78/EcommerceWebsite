import React from 'react';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';

const Home = () => {
    // Dummy Data
    const products = [
        { id: 1, name: "Abstract Printed Shirt", description: "Cotton slim fit", price: "899", originalPrice: "1999", discount: "55", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80" },
        { id: 2, name: "Casual Denim Jacket", description: "Blue washed denim", price: "2499", originalPrice: "4999", discount: "50", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80" },
        { id: 3, name: "Classic White Sneakers", description: "Comfortable daily wear", price: "1599", originalPrice: "3499", discount: "54", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1624&q=80" },
        { id: 4, name: "Floral Summer Dress", description: "Lightweight rayon", price: "1299", originalPrice: "2599", discount: "50", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=892&q=80" },
        { id: 5, name: "Smart Watch Series 7", description: "Black strap", price: "4999", originalPrice: "9999", discount: "50", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80" },
    ];
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-red-50 to-pink-50">
                <div className="container relative z-10 flex flex-col items-center px-6 py-16 mx-auto text-center md:flex-row md:text-left md:py-24">

                    {/* Text Content */}
                    <div className="w-full mb-10 md:w-1/2 md:mb-0">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-100 rounded-full">
                            New Arrivals
                        </span>
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                            Discover Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Perfect Style</span>
                        </h1>
                        <p className="mb-8 text-lg text-gray-600 md:text-xl">
                            Upgrade your wardrobe with our latest collection. Trendy, comfortable, and affordable fashion for everyone.
                        </p>
                        <button className="px-8 py-3.5 text-base font-bold text-white transition-transform transform shadow-lg rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105 hover:shadow-xl focus:outline-none">
                            Shop Now
                        </button>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative w-full md:w-1/2">
                        <div className="relative mx-auto w-80 h-96 md:w-96 md:h-[500px]">
                            <div className="absolute inset-0 transform bg-pink-200 rotate-6 rounded-3xl -z-10"></div>
                            <div className="absolute inset-0 transform bg-red-200 -rotate-6 rounded-3xl -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                alt="Fashion Model"
                                className="object-cover w-full h-full shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>

                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-red-200 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
            </section>


            {/* Categories / Featured */}
            <section className="px-6 py-16 mx-auto container-xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
                    <p className="mt-2 text-gray-500">Explore our wide range of collections</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
                    {['MEN', 'WOMEN', 'KIDS', 'BEAUTY', 'GENZ'].map((category) => (
                        <CategoryCard key={category} category={category} />
                    ))}
                </div>
            </section>

            {/* Trending Products */}
            <section className="px-6 py-16 bg-white">
                <div className="container mx-auto">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
                            <p className="mt-2 text-gray-500">Top picks for you this season</p>
                        </div>
                        <button className="hidden text-sm font-semibold text-red-500 transition hover:text-red-700 md:block">
                            View All &rarr;
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <button className="text-sm font-semibold text-red-500 transition hover:text-red-700">
                            View All &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gray-900">
                <div className="px-6 mx-auto text-center container-xl">
                    <h2 className="mb-4 text-3xl font-bold text-white">Subscribe to our Newsletter</h2>
                    <p className="mb-8 text-gray-400">Get the latest updates on new products and upcoming sales</p>
                    <div className="flex flex-col justify-center max-w-lg gap-4 mx-auto sm:flex-row">
                        <input type="email" placeholder="Enter your email" className="w-full px-6 py-3 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500" />
                        <button className="px-8 py-3 font-bold text-white transition rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:shadow-lg hover:shadow-red-500/30">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;