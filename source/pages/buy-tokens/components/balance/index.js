import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { tokenName } from '~/config';
import Panel from '@daonomic/ui/source/panel';
import Translation from '~/components/translation';
import formatNumber from '~/i18n/format-number';
import styles from './balance.css';

@inject(({ walletBalance, payment }) => ({
  balance: walletBalance.state.balance,
  prices: payment.prices,
}))
@observer
export default class Balance extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        rate: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    return (
      <Panel className={styles.root}>
        <h3 className={styles.title}>
          <Translation id="widgets:yourWalletBalance" />
        </h3>

        <p className={styles.balance}>
          {formatNumber(this.props.balance)} {tokenName}
        </p>

        {this.props.prices.map((price) => (
          <p className={styles.balanceConverted} key={price.label}>
            {formatNumber(this.props.balance / price.rate)} in {price.label}
          </p>
        ))}
      </Panel>
    );
  }
}
