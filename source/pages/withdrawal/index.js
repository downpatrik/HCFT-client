import * as React from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import Panel from '@daonomic/ui/source/panel';
import Button from '@daonomic/ui/source/button';
import Heading from '~/components/heading';

import { tokenName, withdrawalEmail } from '~/config';

import styles from './styles.css';

@inject(({ walletBalance, kyc }) => ({
  balance: walletBalance.state.balance,
  address: kyc.state.formData.get('address'),
}))
export default class Withdrawal extends React.Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  };

  state = {
    tokensToSale: this.props.balance,
  };

  email = localStorage.getItem('email');

  componentWillReceiveProps(nextProps) {
    if (nextProps.balance < this.state.tokensToSale) {
      this.setState({ tokensToSale: nextProps.balance });
    }
  }

  handleTokensToSaleChange = (event) => {
    this.setState({ tokensToSale: parseInt(event.target.value, 10) });
  };

  render() {
    return (
      <Panel>
        <Heading tagName="h1" size="normal">
          Withdrawal of funds
        </Heading>
        <form
          method="POST"
          action={`https://formspree.io/${withdrawalEmail}`}
          className={styles.form}
        >
          <label>
            Tokens to withdrawal:{' '}
            <span className={styles.value}>
              {this.state.tokensToSale} {tokenName}
            </span>
            <input
              type="range"
              className={styles.range}
              value={this.state.tokensToSale}
              onChange={this.handleTokensToSaleChange}
              max={this.props.balance}
            />
          </label>
          <input
            hidden
            readOnly
            name="_subject"
            value="Заявка на вывод средств от ФИО"
          />
          <input
            hidden
            readOnly
            name="Сумма"
            value={`${this.state.tokensToSale} ${tokenName}`}
          />
          <input hidden readOnly name="ФИО" value={'нет'} />
          <input hidden readOnly name="E-mail" value={this.email} />
          <input hidden readOnly name="Phone" value={'нет'} />
          <input hidden readOnly name="Address" value={this.props.address} />
          <Button type="submit" disabled={this.state.tokensToSale === 0}>
            Send request
          </Button>
        </form>
      </Panel>
    );
  }
}
