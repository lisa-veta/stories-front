import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@app/App.tsx';

async function initMSW() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }
}

initMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App/>
    </StrictMode>,
  );
});
