/* eslint-disable jsx-a11y/aria-role */
import React from 'react';

interface ICellConfig {
  isActive: boolean;
  index: number;
}

export default function Cell({ isActive, index }: ICellConfig) {
  const state = isActive ? 'alive' : 'dead';
  return (
    <div
      tabIndex={index + 1}
      aria-label={`${state} cell`}
      className={state}
    ></div>
  );
}
