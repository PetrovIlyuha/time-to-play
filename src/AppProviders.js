import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import store from './reducers/storeSetup';

export const AppProviders = ({ children }) => {
  return (
    <AnimatePresence>
      <Provider store={store}>{children}</Provider>
    </AnimatePresence>
  );
};
