import ReactApexChart from 'react-apexcharts';
import './styles.css';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

const SalesByGender = ({ labels, name, series }: Props) => {
  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-by-gender-quantity-container">
        <h2 className="sales-by-gender-quantity">R$ 746.484,00</h2>
        <span className="sales-by-gender-quantity-description">Total de vendas</span>
      </div>
      <div className="sales-by-gender-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          height={'100%'}
          series={series}
        />
      </div>
    </div>
  );
};

export default SalesByGender;
