import * as React from 'react';
import { Button, CropContent, Icon } from '../src/components';

const sampleText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
quae ab illo inventore veritatis et quasi architecto beatae vitae
dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
sed quia non numquam eius modi tempora incidunt ut labore et dolore
magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
aliquid ex ea commodi consequatur? Quis autem vel eum iure
reprehenderit qui in ea voluptate velit esse quam nihil molestiae
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
pariatur?`;

const Template = (args) => (
  <CropContent {...args}>
    {sampleText}
    <div
      className="tk-m-2h"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Button>Got it!</Button>
    </div>
  </CropContent>
);
export const Default = Template.bind({});
Default.args = {
  className: 'tk-quote-container',
};

export const WithoutContentOverflow = () => {
  return (
    <div style={{ width: '80%' }}>
      <div className="flex-row">
        <div className="flex-col">
          <h2>Without content overflow</h2>
          <p>
            {' '}
            Note that squeezing the window and shrinking the content until it
            overflows will make the show more toggle appear:{' '}
          </p>
          <CropContent
            className="tk-quote-container tk-quote-container--error"
            onToggle={(collapsed, el) =>
              console.log('CropContent toggled', collapsed, el)
            }
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          </CropContent>
        </div>
      </div>
    </div>
  );
};

export const Unstyled = () => {
  return (
    <div style={{ width: '80%' }}>
      <div className="flex-row">
        <div className="flex-col">
          <h2>Unstyled</h2>
          <CropContent
            onToggle={(collapsed, el) =>
              console.log('CropContent toggled', collapsed, el)
            }
          >
            {sampleText}
          </CropContent>
        </div>
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const onToggle = (collapsed, el) => {
    setIsCollapsed(collapsed);
    console.log('CropContent toggled', collapsed, el);
  };
  return (
    <div style={{ width: '80%' }}>
      <p>Control the collapse logic from external</p>
      <Button onClick={() => setIsCollapsed(false)}>Open content</Button>
      <Button onClick={() => setIsCollapsed(true)} variant="secondary">
        Close content
      </Button>
      <Button variant="tertiary" onClick={() => setIsCollapsed(isCollapsed => !isCollapsed)}>Toggle content</Button>
      <div className="tk-py-1"/>
      <CropContent className="tk-quote-container" collapsed={isCollapsed} onToggle={onToggle}>
        {sampleText}
      </CropContent>
      <p><Icon iconName="alert-triangle tk-mr-h tk-text-color--primary"/> When using the prop <b>collapsed</b>, the collapsed logic will not rely on the internal state anymore. Thus to keep <b>collapsed</b> up-to-date from an internal change, you need to listen to the event <b>onToggle</b>.</p>

    </div>
  );
};

export default {
  title: 'Components/Containers/Crop Content',
  component: CropContent,
};
