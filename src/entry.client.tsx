import React, { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import reportWebVitals from './reportWebVitals';

startTransition(() => {
  hydrateRoot(
    document,
    <React.StrictMode>
      <HydratedRouter />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
