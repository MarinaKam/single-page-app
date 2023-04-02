import { FC } from 'react';
import { Main, GlobalProvider } from './Main';

const App: FC = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

export default App;
