import React from "react";

const MovieCard: React.FC = () => {
  return (
    <div className="border rounded-lg shadow p-4">
      <h3 className="text-lg font-bold">Movie Title</h3>
      <p className="text-sm text-gray-600">Movie details here</p>
    </div>
  );
};

export default MovieCard;
