import React from 'react';
import ProductCard from './ProductCard';

const RelatedProducts = () => {
    const products = Array.from({ length: 6 }).map((_, index) => ({
        id: index + 100,
        name: `Similar Item ${index + 1}`,
        description: "You might also like",
        price: "999",
        originalPrice: "1999",
        discount: "50",
        image: `https://source.unsplash.com/random/400x500/?shoes,${index}`
    }));

    return (
        <div className="py-12 bg-white border-t border-gray-100">
            <div className="container px-6 mx-auto">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">You May Also Like</h2>

                <div className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide snap-x">
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[220px] md:min-w-[260px] snap-start">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
