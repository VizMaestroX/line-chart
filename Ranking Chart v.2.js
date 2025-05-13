Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Top 20 Global Brands by Value (2024)',
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: 'Montserrat, sans-serif'
    }
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: [
      'Apple', 'Microsoft', 'Amazon', 'Google', 'Samsung', 'Toyota', 'Coca-Cola', 'Mercedes-Benz', 'McDonald’s', 'BMW',
      'Louis Vuitton', 'Tesla', 'Cisco', 'Nike', 'Instagram', 'Disney', 'Adobe', 'Oracle', 'IBM', 'SAP'
    ],
    title: {
      text: null
    },
    gridLineWidth: 1,
    lineWidth: 0,
    labels: {
      style: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '11px'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Brand Value (Million $)',
      align: 'high'
    },
    labels: {
      overflow: 'justify',
      formatter: function () {
       return Highcharts.numberFormat(this.value, 0, '.', ','); 
      }
    },
    gridLineWidth: 0
  },
  tooltip: {
    useHTML: true,
    formatter: function () {
      return `
        <div style="text-align:center; font-family:'Montserrat', sans-serif;">
          <strong>${this.key}</strong><br>
          Value: $${Highcharts.numberFormat(this.y, 0, '.', ',')}M
        </div>
      `;
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      dataLabels: {
        enabled: true,
        formatter: function () {
          return `$${Highcharts.numberFormat(this.y, 0, '.', ',')}M`;
        },
        style: {
          fontSize: '10px',
          fontFamily: 'Montserrat, sans-serif'
        }
      },
      groupPadding: 0.05
    }
  },
  series: [{
    name: 'Brand Value',
    data: [
      488900, 352500, 298100, 291300, 100800, 72800, 61200, 58900, 53000, 52000,
      50900, 45500, 45500, 45400, 45100, 42800, 39400, 37700, 37300, 36800
    ]
  }]
});