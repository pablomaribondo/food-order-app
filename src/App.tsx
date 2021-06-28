import { FC } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
