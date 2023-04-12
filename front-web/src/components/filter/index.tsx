import { useEffect, useState } from 'react';
import { Store } from '../../types/store';
import Select from 'react-select';
import { makeRequest } from '../../ultils/request';
//
import './styles.css';

type Props = {
  onChange: (store: Store) => void;
};

const Filter = ({ onChange }: Props) => {
  //
  const [selectStore, setSelectStore] = useState<Store[]>([]);

  const handleChangeStore = (value: Store) => {
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
            onChange={(value) => handleChangeStore(value as Store)}
            classNamePrefix="select-filter-component"
            options={selectStore}
            isClearable
            placeholder="Selecione a loja"
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      </div>
    </div>
  );
};

export default Filter;
