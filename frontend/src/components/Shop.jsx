import React from 'react';
import ProductCard from './ProductCard';

const Shop = ({ category }) => {
    // Dummy Data
    const products = Array.from({ length: 12 }).map((_, index) => ({
        id: index + 1,
        name: `Fashion Item ${index + 1}`,
        description: "Trendy and stylish",
        price: (Math.random() * 1000 + 500).toFixed(0),
        originalPrice: (Math.random() * 2000 + 1000).toFixed(0),
        discount: "40",
        image: `https://source.unsplash.com/random/400x500/?fashion,${category || 'style'},${index}` // Placeholder
    }));

    const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products";

    return (
        <div className="min-h-screen pt-4 bg-gray-50">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col mb-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Shop {displayCategory}</h1>
                        <p className="mt-1 text-gray-500">Showing {products.length} results</p>
                    </div>

                    {/* Simple Sort/Filter UI */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <nav className="flex gap-2">
                        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
                        <button className="px-4 py-2 text-white bg-red-500 rounded-lg">1</button>
                        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                        <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Shop;
