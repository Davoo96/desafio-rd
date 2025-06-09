import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';
import Modal from '../../shared/Modal';
import { getButtonContent } from '../../shared/getButtonContent';

function Features({ features, selectedFeatures = [], onFeatureChange }) {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureChange = (feature) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  const removeFirstFilter = () => {
    const updatedFeatures = currentFeatures.slice(1);
    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  const removeRemainingFilters = () => {
    const updatedFeatures = currentFeatures.slice(0, 1);
    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Filtre por funcionalidade</h2>
      <button
        type="button"
        className="text-[#747474] text-xs mb-2 p-2 rounded border border-[#CACACA] flex items-center justify-between w-full"
        onClick={() => setIsModalOpen(true)}
      >
        {getButtonContent(
          currentFeatures,
          removeFirstFilter,
          removeRemainingFilters
        )}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2031 8.60352L11.9962 15.2242L5.78933 8.60352"
            stroke="#232323"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Modal
        title="Preferências"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ul>
          {features.map((feature, index) => (
            <li key={`${feature}-${index}`} className="mb-2">
              <Checkbox
                value={feature}
                checked={currentFeatures.includes(feature)}
                onChange={() => handleFeatureChange(feature)}
                id={`preference-${index}`}
              >
                {feature}
              </Checkbox>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

export default Features;
