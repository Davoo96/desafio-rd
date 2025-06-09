// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';
import Modal from '../../shared/Modal';
import { getButtonContent } from '../../shared/getButtonContent';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] =
    useState(selectedPreferences);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  const removeFirstFilter = () => {
    const updatedPreferences = currentPreferences.slice(1);
    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  const removeRemainingFilters = () => {
    const updatedPreferences = currentPreferences.slice(0, 1);
    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Filtre por preferências</h2>
      <button
        type="button"
        className="text-[#747474] text-xs mb-2 p-2 rounded border border-[#CACACA] flex items-center justify-between w-full"
        onClick={() => setIsModalOpen(true)}
      >
        {getButtonContent(
          currentPreferences,
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
          {preferences.map((preference, index) => (
            <li key={`${preference}-${index}`} className="mb-2">
              <Checkbox
                value={preference}
                checked={currentPreferences.includes(preference)}
                onChange={() => handlePreferenceChange(preference)}
                id={`preference-${index}`}
              >
                {preference}
              </Checkbox>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
}

export default Preferences;
