import * as React from 'react';

import Panel from '@daonomic/ui/source/panel';

export default class News extends React.Component {
  render() {
    return (
      <Panel>
        <iframe
          src="https://tgwidget.com/channel/?id=5a3d27f683ba8872388b4567"
          frameborder="0"
          scrolling="no"
          horizontalscrolling="no"
          verticalscrolling="no"
          width="100%"
          height="540px"
          async
        />
      </Panel>
    );
  }
}
