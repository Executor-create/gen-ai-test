import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  price: string;
  originalPrice?: string | null;
  rating: number;
  reviews: number;
  image: string;
  genre: string;
  discount?: string | null;
  isNew?: boolean;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-purple-500/50">
      {/* Discount Badge */}
      {game.discount && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {game.discount}
        </div>
      )}

      {/* New Badge */}
      {game.isNew && (
        <div className="absolute top-4 right-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          NEW
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-200 transform hover:scale-110">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-purple-400 text-sm font-medium bg-purple-400/20 px-2 py-1 rounded">
            {game.genre}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-200">
          {game.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {game.rating} ({game.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">{game.price}</span>
            {game.originalPrice && (
              <span className="text-gray-500 line-through text-lg">{game.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;