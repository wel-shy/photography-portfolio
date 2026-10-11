import React, { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import reportWebVitals from './reportWebVitals';

// Earlier versions of the site cached EXIF details here. Safe to delete once
// returning visitors have had time to come back (added October 2026).
try {
  localStorage.removeItem('image-exif');
} catch {
  // Storage can be unavailable, e.g. when blocked by the browser
}

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
