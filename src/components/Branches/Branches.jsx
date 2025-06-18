import React from 'react';
import image from '../../assets/schoolImages/Nikhil_kumar.jpg'

const BranchesPage = () => {
  const branches = [
    {
      name: 'Lucknow Branch',
      address: '123, Hazratganj, Lucknow, UP',
      phone: '+91 9876543210',
      mapLink: 'https://maps.app.goo.gl/your-lucknow-branch-map-link',
      image: image
    },
    {
      name: 'Delhi Branch',
      address: '456, Connaught Place, New Delhi, DL',
      phone: '+91 9123456789',
      mapLink: 'https://maps.app.goo.gl/your-delhi-branch-map-link',
      image: image
    },
    {
      name: 'Mumbai Branch',
      address: '789, Bandra, Mumbai, MH',
      phone: '+91 8765432109',
      mapLink: 'https://maps.app.goo.gl/your-mumbai-branch-map-link',
      image: image
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12 relative">
          Our Branches
          <span className="block w-24 h-1 bg-orange-400 mx-auto mt-2 rounded"></span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center p-6 min-h-[500px]"
            >
              <img
                src={branch.image}
                alt={`${branch.name} Branch`}
                className="w-full h-74 object-cover rounded-xl mb-4 shadow-md"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-1">{branch.name}</h2>
              <div className="w-10 h-1 bg-orange-400 rounded-full mb-3"></div>
              <p className="text-gray-600 mb-1">{branch.address}</p>
              <p className="text-gray-600">📞 {branch.phone}</p>
              {branch.mapLink && (
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
                >
                  📍 View on Map
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
