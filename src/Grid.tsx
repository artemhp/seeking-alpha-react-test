import React, { useState, useEffect } from 'react';

import './styles.css';

import Cell from './components/Cell';

import { generatePopulatedGrid, TGrid } from './functions/grid';
import nextGrid from './functions/nextGrid';

interface IGrid {
  cols: number;
  rows: number;
  tick: number;
}

export default function Grid({ cols, rows, tick }: IGrid) {
  const [grid, setGrid] = useState<TGrid>(() =>
    generatePopulatedGrid(cols, rows)
  );

  useEffect(() => {
    document.documentElement.style.setProperty('--gridColumn', `${cols}`);
    document.documentElement.style.setProperty('--gridRow', `${rows}`);
  }, [cols, rows]);

  useEffect(() => {
    const next = nextGrid({ grid, cols, rows });
    if (JSON.stringify(next) !== JSON.stringify(grid)) {
      const interval = setInterval(() => setGrid(next), tick);
      return () => clearInterval(interval);
    }
  }, [grid, cols, rows, tick]);

  return (
    <div className='grid'>
      {grid.map((row, rowIndex) =>
        row.map((column, colIndex) => (
          <Cell
            key={`${rowIndex}_${colIndex}`}
            index={1}
            isActive={column.isActive}
          />
        ))
      )}
    </div>
  );
}
