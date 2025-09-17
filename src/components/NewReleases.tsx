import React from 'react';
import GameCard from './GameCard';

const NewReleases: React.FC = () => {
  const newReleases = [
    {
      id: 7,
      title: "Quantum Strike",
      price: "$59.99",
      originalPrice: null,
      rating: 4.3,
      reviews: 156,
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "FPS",
      discount: null,
      isNew: true
    },
    {
      id: 8,
      title: "Medieval Conquest",
      price: "$49.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 234,
      image: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Strategy",
      discount: null,
      isNew: true
    },
    {
      id: 9,
      title: "Neon City Runner",
      price: "$24.99",
      originalPrice: null,
      rating: 4.4,
      reviews: 89,
      image: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Platformer",
      discount: null,
      isNew: true
    },
    {
      id: 10,
      title: "Ocean Explorer",
      price: "$34.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 312,
      image: "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      genre: "Adventure",
      discount: null,
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              New Releases
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get your hands on the latest games fresh from the developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newReleases.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;