import React from "react";

export const FilterInput = ({onChange, onFocus}) => (
  <input data-testid="filter-input" type="text" placeholder="Luke Skywalker" onChange={evt => onChange(evt.target.value)} onFocus={onFocus}/>
)