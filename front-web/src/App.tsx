import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { Store } from './types/store';

const App = () => {
  const [controlComponentsData, setControlComponentsData] = useState<Store>();

  const handleFilterChange = (filter: Store) => {
    setControlComponentsData(filter);
  };

  useEffect(() => {
    if (controlComponentsData) {
      console.log(controlComponentsData);
    }
  }, [controlComponentsData]);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onChange={handleFilterChange} />
      </div>
    </>
  );
};

export default App;
