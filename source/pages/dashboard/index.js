import * as React from 'react';
import Panel from '@daonomic/ui/source/panel';
import axios from 'axios';
import { FlexibleWidthXYPlot, XAxis, YAxis, LineSeries } from 'react-vis';

import TwoColumnsLayout from '~/components/two-columns-layout';
import SaleTimeline from '~/components/sale-timeline';
import Balance from '../buy-tokens/components/balance';
import TokenPrice from '../buy-tokens/components/token-price';

import styles from './styles.css';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function parseDate(date) {
  const [d, m, y] = date.split('.');

  return new Date(y, m, d);
}

function mapRates(rates) {
  return rates.map((rate) => ({
    x: parseDate(rate['DATE']),
    y: parseFloat(rate['HCFT - USD'].toString().replace(',', '.')),
  }));
}

function getMonth(date) {
  return months[new Date(date).getMonth()];
}

function getTick(date) {
  return `${getMonth(date)} ${new Date(date).getFullYear()}`;
}

export default class Dashboard extends React.Component {
  state = {
    rates: null,
  };

  componentDidMount() {
    axios.get('/rates.json').then((response) => {
      this.setState({ rates: response.data });
    });
  }

  render() {
    return (
      <TwoColumnsLayout>
        <TwoColumnsLayout.Left>
          <Panel>
            <div className={styles.diagram}>
              {this.state.rates ? (
                <FlexibleWidthXYPlot height={400}>
                  <LineSeries color="red" data={mapRates(this.state.rates)} />
                  <XAxis tickFormat={getTick} tickTotal={4} />
                  <YAxis title="HCFT to USD" />
                </FlexibleWidthXYPlot>
              ) : (
                'Loading...'
              )}
            </div>
          </Panel>
        </TwoColumnsLayout.Left>
        <TwoColumnsLayout.Right>
          <Balance />
          <TokenPrice />
          <SaleTimeline />
        </TwoColumnsLayout.Right>
      </TwoColumnsLayout>
    );
  }
}
