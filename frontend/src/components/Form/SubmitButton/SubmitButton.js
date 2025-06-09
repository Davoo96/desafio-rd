import React from 'react';

function SubmitButton({ text, className }) {
  return (
    <button
      type="submit"
      className={`bg-[#0A626B] hover:bg-[#076e7a] text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
