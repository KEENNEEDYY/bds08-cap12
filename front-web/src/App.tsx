import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import { Store } from './types/store';
import SalesByGender from './components/sales-by-gender';

const App = () => {
  const [controlComponentsData, setControlComponentsData] = useState<Store>();

  const handleFilterChange = (filter: Store) => {
    setControlComponentsData(filter);
  };

  useEffect(() => {
    console.log(controlComponentsData);
  }, [controlComponentsData]);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onChange={handleFilterChange} />
        <SalesByGender
          name="Sales by Genre"
          labels={['Masculino', 'Feminino', 'Outro']}
          series={[22, 20, 30]}
        />
      </div>
    </>
  );
};

export default App;
