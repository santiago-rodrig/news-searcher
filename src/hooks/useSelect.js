import React, { useState } from "react";

const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);
  const NewsSelect = () => (
    <select className="borwser-default" value={state} defaultValue="">
      <option value="" disabled>
        -- Eliga una opción --
      </option>
      {options.map((o) => (
        <option key={o.id} value={o.value}>
          {o.content}
        </option>
      ))}
    </select>
  );
  return [state, NewsSelect];
};

export default useSelect;
