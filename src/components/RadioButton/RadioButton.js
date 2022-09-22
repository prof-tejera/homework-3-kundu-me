import React from 'react';
import "./RadioButton.css";

import Panel from "components/Panel/Panel";

const RadioButton = ({ name, items, ...props }) => {

  if (!Array.isArray(items)) {
    items = [items];
  }
  const n = items.length;

  return (
    <React.Fragment>
      {[...Array(n)].map((x, i) =>
        <React.Fragment>
          <input type="radio" id={items[i]} value={items[i]} name={name}/>
          <label htmlFor={items[i]}>{items[i]}</label>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RadioButton;
