import React from 'react';
import GameCard from './GameCard';

const BestSellers: React.FC = () => {
  const bestSellers = [
    {
      id: 1,
      title: "Apex Warriors",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.8,
      reviews: 1543,
      image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Battle Royale",
      discount: "-29%"
    },
    {
      id: 2,
      title: "Dragon Quest Eternal",
      price: "$39.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 2847,
      image: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "RPG",
      discount: null
    },
    {
      id: 3,
      title: "Speed Racer X",
      price: "$29.99",
      originalPrice: "$39.99",
      rating: 4.6,
      reviews: 892,
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Racing",
      discount: "-25%"
    },
    {
      id: 4,
      title: "Mystic Realms",
      price: "$34.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 1205,
      image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Fantasy",
      discount: null
    },
    {
      id: 5,
      title: "Space Odyssey",
      price: "$44.99",
      originalPrice: "$59.99",
      rating: 4.8,
      reviews: 1687,
      image: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Sci-Fi",
      discount: "-25%"
    },
    {
      id: 6,
      title: "Shadow Assassin",
      price: "$27.99",
      originalPrice: "$34.99",
      rating: 4.5,
      reviews: 945,
      image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Action",
      discount: "-20%"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Best Sellers
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular games loved by millions of players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;