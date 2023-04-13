import ReactApexChart from 'react-apexcharts';
import {
  buildChartLabels,
  buildChartSeries,
  buildPieChartConfig,
  sumSalesByGender
} from './helpers';
import { Store } from '../../types/store';
import { useEffect, useMemo, useState } from 'react';
import { SalesByGender as SalesGender } from '../../types/sales-by-gender';
import { buildFilterParams, makeRequest } from '../../ultils/request';
import { formatPrice } from '../../ultils/formatters';
//
import './styles.css';

type Props = {
  name: string;
  store?: Store;
};

const SalesByGender = ({ name, store }: Props) => {
  //
  const [salesByGender, setSalesByGender] = useState<SalesGender[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  //
  const params = useMemo(() => buildFilterParams(store), [store]);

  useEffect(() => {
    makeRequest.get('/sales/by-gender', { params }).then((response) => {
      setSalesByGender(response.data);
      setTotalSum(sumSalesByGender(response.data));
    });
  }, [params]);

  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-by-gender-quantity-container">
        <h2 className="sales-by-gender-quantity">{formatPrice(totalSum)}</h2>
        <span className="sales-by-gender-quantity-description">Total de vendas</span>
      </div>
      <div className="sales-by-gender-chart">
        <ReactApexChart
          options={buildPieChartConfig(buildChartLabels(salesByGender), name)}
          type="donut"
          height="100%"
          series={buildChartSeries(salesByGender)}
        />
      </div>
    </div>
  );
};

export default SalesByGender;
