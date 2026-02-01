import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
            <img
                src={`https://source.unsplash.com/random/400x500/?fashion,${category}`}
                // Fallback for demo stability
                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'}
                alt={category}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-center transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="mb-2 text-2xl font-bold tracking-wider text-white uppercase drop-shadow-lg">{category}</h3>
                <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-black uppercase transition-opacity bg-white rounded-full opacity-0 group-hover:opacity-100">
                    Shop Now
                </span>
            </div>
        </div>
    );
};

export default CategoryCard;
