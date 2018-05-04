import * as React from 'react';

import Panel from '@daonomic/ui/source/panel';

export default class Support extends React.Component {
  bodyRef = (node) => {
    if (node) {
      const script = document.createElement('script');

      script.id = 'bx24_form_inline';
      script.dataset.skipMoving = true;

      const scriptText = document.createTextNode(`
        (function(w, d, u, b) {
          w['Bitrix24FormObject'] = b;
          w[b] = w[b] || function() {
            arguments[0].ref = u;
            (w[b].forms = w[b].forms || []).push(arguments[0])
          };

          delete w[b]['forms'];

          var script = d.createElement('script');
          script.async = true;
          script.src = u + '?' + (1 * new Date());
          var header = d.getElementsByTagName('script')[0];
          header.parentNode.insertBefore(script, header);
        })(
          window,
          document,
          'https://luxstone.bitrix24.ru/bitrix/js/crm/form_loader.js',
          'b24form'
        );

        b24form({"id":"35","lang":"ru","sec":"e8as04","type":"inline"});
      `);

      script.append(scriptText);

      node.appendChild(script);
    }
  };

  render() {
    return (
      <Panel>
        <div ref={this.bodyRef} />
      </Panel>
    );
  }
}
