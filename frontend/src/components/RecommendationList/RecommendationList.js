import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 bg-[#C2DADC] w-full text-center py-6 rounded-t-xl">
        Lista de Recomendações:
      </h2>

      {recommendations.length === 0 && (
        <p className="py-3 px-4">Nenhuma recomendação encontrada.</p>
      )}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="mb-2 border border-[#0A626B] rounded-lg bg-white w-full max-w-[800px] mx-auto py-3 px-4 text-[#0A626B] font-bold"
          >
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
