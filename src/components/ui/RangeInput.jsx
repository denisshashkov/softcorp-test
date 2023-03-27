import React, { useState } from 'react';

export const RangeInput = ({ ...attrs }) => {
  const minCost = 0;
  const maxCost = 100;
  const [costTextValue, setCostTextValue] = useState(75);
  const handleCostTextChange = (e) => {
    setCostTextValue(e.target.value);
  };
  return (
    <div className='input-range'>
      <label className='input-range__label' htmlFor='range'>
        Sed ut perspiciatis, unde omnis iste natus
      </label>
      <span className='input-range__percent'>{`${costTextValue} %`}</span>

      <input
        min={minCost}
        max={maxCost}
        value={costTextValue}
        onChange={handleCostTextChange}
        name='range'
        type='range'
        {...attrs}
      />
      <div className='input-range__progressBar'></div>
    </div>
  );
};
