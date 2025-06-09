import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input type="checkbox" className="h-5 w-5 text-[#0A626B]" {...props} />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
