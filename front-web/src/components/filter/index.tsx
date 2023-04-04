import { useEffect, useState } from 'react';
import { Store } from '../../types/store';
import './styles.css';
import Select from 'react-select';
import { makeRequest } from '../../ultils/request';

const Filter = () => {
  const [selectStore, selectSetStore] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest.get<Store[]>('/stores').then((response) => {
      selectSetStore(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <div className="filter-component">
        <Select
          getOptionLabel={(store: Store) => store.name}
          getOptionValue={(store: Store) => String(store.id)}
          options={selectStore}
          classNamePrefix="select-filter-component"
        />
      </div>
    </div>
  );
};

export default Filter;
