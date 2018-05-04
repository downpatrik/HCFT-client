// @flow
import * as React from 'react';
import cn from 'classnames';
import Panel from '@daonomic/ui/source/panel';
import { saleTimeline } from '~/config';
import type { TimelineStep } from '~/types/sale-timeline';
import styles from './sale-timeline.css';

export default class SaleTimeline extends React.Component<{}> {
  renderSteps = (timeline: TimelineStep[]) =>
    timeline.map(({ date, text, url }) => (
      <li key={date} className={cn(styles.item)}>
        <div className={styles.row}>
          <a className={styles.now} target="_blank" href={url}>
            {text}
          </a>
        </div>
      </li>
    ));

  render() {
    if (saleTimeline.length === 0) {
      return null;
    }

    return saleTimeline.map(({ title, steps }) => (
      <Panel key={title} className={styles.root}>
        <h3 className={styles.title}>{title}</h3>

        <ul className={styles.timeline}>{this.renderSteps(steps)}</ul>
      </Panel>
    ));
  }
}
