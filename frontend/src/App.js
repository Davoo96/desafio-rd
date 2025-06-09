import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full text-center px-4 py-8 bg-gradient-to-t from-[#0A626B] to-[#001118]">
        <div className="max-w-[621px] mx-auto">
          <h1 className="text-white text-2xl lg:text-4xl font-bold mb-8">
            <span className="block">
              Encontre a <span className="text-[#06D9DF]">solução ideal</span>
            </span>{' '}
            da RD Station{' '}
            <span className="text-[#06D9DF]">para o seu negócio</span>
          </h1>
          <p className="text-sm text-white pb-4">
            Selecione seus objetivos e preferências e receba recomendações
            personalizadas de produtos de CRM, Marketing e IA para acelerar seus
            resultados.
          </p>
          <a href="#form" className="block w-[24px] h-[24px] mx-auto">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 5L12.5 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 12L12.5 19L5.5 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-white mt-6 p-8 rounded-lg shadow-md w-full md:w-3/4 lg:max-w-[900px] gap-4">
        <div>
          <Form onRecommendationsChange={setRecommendations} />
        </div>
      </div>
      <div className="bg-[#E2ECED] border border-[#0A626B] rounded-xl w-full md:w-3/4 lg:max-w-[900px]">
        <RecommendationList recommendations={recommendations} />
      </div>
    </div>
  );
}

export default App;
