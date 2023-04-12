import { ApexOptions } from 'apexcharts';
import { SalesByGender } from '../../types/sales-by-gender';
import { formatGender, formatPrice } from '../../ultils/formatters';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#ce4686', '#3e82f7', '#9b9999'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 20,
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '70%',
          labels: {
            show: false,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '16px',
              color: '#8D8D8D',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    },
    tooltip: {
      y: {
        formatter: function (value: number) {
          return `${formatPrice(value)}`;
        }
      }
    }
  } as ApexOptions;
};

export const buildChartSeries = (salesByGender: SalesByGender[] = []) => {
  return salesByGender.map(({ sum }) => sum);
};

export const buildChartLabels = (SalesByGender: SalesByGender[] = []) => {
  return SalesByGender.map(({ gender }) => formatGender(gender));
};

export const sumSalesByGender = (salesByGender: SalesByGender[] = []) => {
  return salesByGender.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
