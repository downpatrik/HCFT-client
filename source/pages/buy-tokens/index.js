import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import formatDate from '~/i18n/format-date';
import TwoColumnsLayout from '~/components/two-columns-layout';
import Panel from '@daonomic/ui/source/panel';
import Translation from '~/components/translation';
import Heading from '~/components/heading';
import Kyc from './components/kyc';
import PaymentMethod from './components/payment-method';
import Balance from './components/balance';
import TokenPrice from './components/token-price';
import SaleTimeline from '~/components/sale-timeline';
import styles from './buy-tokens.css';

@inject(({ sale, kyc }) => ({
  sale: {
    isStarted: sale.isStarted,
    isFinished: sale.isFinished,
    startTimestamp: sale.state.startTimestamp,
    endTimestamp: sale.state.endTimestamp,
  },
  isLoaded: sale.isLoaded && kyc.isLoaded,
  isAllowedToPay: kyc.isAllowed,
}))
@observer
class BuyTokens extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    sale: PropTypes.shape({
      isStarted: PropTypes.bool.isRequired,
      isFinished: PropTypes.bool.isRequired,
      startTimestamp: PropTypes.number.isRequired,
      endTimestamp: PropTypes.number.isRequired,
    }).isRequired,
    isAllowedToPay: PropTypes.bool.isRequired,
  };

  renderPaymentMethod = () => {
    const { isAllowedToPay } = this.props;

    if (!isAllowedToPay) {
      return null;
    }

    return <PaymentMethod />;
  };

  renderPreloader = () => (
    <Panel paddingSize="large">
      <Heading tagName="h1" className={styles.placeholder} size="large">
        <Translation id="loading" />...
      </Heading>
    </Panel>
  );

  renderActiveSaleContent = () => (
    <Fragment>
      <Kyc />
      {this.renderPaymentMethod()}
    </Fragment>
  );

  renderNotStartedSaleContent = () => {
    const { startTimestamp } = this.props.sale;

    return (
      <Panel paddingSize="large">
        <Heading tagName="h1" className={styles.placeholder}>
          <Translation
            id="widgets:saleStarts"
            data={{
              date: formatDate(new Date(startTimestamp)),
            }}
          />
        </Heading>
      </Panel>
    );
  };

  renderFinishedSaleContent = () => (
    <Panel paddingSize="large">
      <Heading tagName="h1" className={styles.placeholder}>
        <Translation id="widgets:saleFinished" />
      </Heading>
    </Panel>
  );

  renderContent = () => {
    const { isLoaded } = this.props;

    if (!isLoaded) {
      return this.renderPreloader();
    }

    return this.renderActiveSaleContent();
  };

  render = () => (
    <TwoColumnsLayout>
      <TwoColumnsLayout.Left>{this.renderContent()}</TwoColumnsLayout.Left>

      <TwoColumnsLayout.Right>
        <Balance />
        <TokenPrice />
        <SaleTimeline />
      </TwoColumnsLayout.Right>
    </TwoColumnsLayout>
  );
}

export default BuyTokens;
