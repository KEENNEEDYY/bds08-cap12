import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { Store } from './types/store';
import SalesByGender from './components/sales-by-gender';

const App = () => {
  //
  const [controlComponentsData, setControlComponentsData] = useState<Store>();

  const handleFilterChange = (filter: Store) => {
    setControlComponentsData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onChange={handleFilterChange} />
        <SalesByGender name="Sales by Genre" store={controlComponentsData} />
      </div>
    </>
  );
};

export default App;
