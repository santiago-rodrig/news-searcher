import React, { useState } from "react";

const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);
  const NewsSelect = () => (
    <select
      className="browser-default"
      value={state}
      defaultValue=""
      onChange={(e) => setState(e.target.value)}
    >
      <option value="" disabled>
        -- Eliga una opción --
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
  return [state, NewsSelect];
};

export default useSelect;
