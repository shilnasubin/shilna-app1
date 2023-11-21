import React, { useState, useEffect } from 'react';

const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map(character => (
            <div key={character.id} className="bg-white p-4 rounded shadow-md">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="text-xl font-semibold mb-2">{character.name}</p>
              <p className="text-gray-600">{character.species}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMortyCharacters;
