import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './components/App';
import './styles/index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const container = document.getElementById('root')!;
const root = createRoot(container);

let persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);