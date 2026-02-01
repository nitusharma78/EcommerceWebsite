import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="relative overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl group hover:-translate-y-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">

                {/* Wishlist Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault(); // Prevent triggering parent click if any
                        setIsWishlisted(!isWishlisted);
                    }}
                    className="absolute z-10 top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200"
                >
                    <span className={`material-symbols-outlined text-[20px] transition-colors duration-200 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-red-500'}`}>
                        favorite
                    </span>
                </button>

                <img
                    src={product.image || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/10 group-hover:opacity-100"></div>

                {/* Quick Add Button */}
                <button className="absolute overflow-hidden transition-all duration-300 transform translate-y-4 opacity-0 bottom-4 left-4 right-4 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white transition-colors bg-white shadow-lg backdrop-blur-md bg-opacity-20 hover:bg-red-500">
                        Add to Bag
                    </div>
                </button>
            </div>

            <div className="p-4">
                <h3 className="mb-1 text-base font-medium text-gray-800 line-clamp-1">{product.name}</h3>
                <p className="mb-2 text-xs text-gray-500 line-clamp-1">{product.description}</p>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="text-xs font-medium text-red-500">({product.discount}% OFF)</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;