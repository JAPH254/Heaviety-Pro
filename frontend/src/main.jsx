import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
 import App from './App.jsx';
import './index.css';
import { store, persistedStore } from './app/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = "myauthapp-449306";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);

