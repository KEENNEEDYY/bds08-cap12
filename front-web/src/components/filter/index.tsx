import { useEffect, useState } from 'react';
import { Store } from '../../types/store';
import './styles.css';
import Select from 'react-select';
import { makeRequest } from '../../ultils/request';

type Props = {
  onChange: (store: Store) => void;
};

const Filter = ({ onChange }: Props) => {
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const handleChangeCategory = (value: Store) => {
    onChange(value);
  };

  useEffect(() => {
    makeRequest.get<Store[]>('/stores').then((response) => {
      setSelectStore(response.data);
    });
  }, []);

  return (
    <div className="filter-container base-card">
      <div className="filter-component">
        {selectStore && (
          <Select
            onChange={(value) => handleChangeCategory(value as Store)}
            classNamePrefix="select-filter-component"
            options={selectStore}
            isClearable
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Filter;
