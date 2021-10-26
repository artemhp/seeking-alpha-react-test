import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

ReactDOM.render(
  <React.StrictMode>
    <Grid cols={10} rows={10} tick={100} />
  </React.StrictMode>,
  document.getElementById('root')
);
