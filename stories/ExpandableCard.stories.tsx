import * as React from 'react';
import {
  ExpandableCard,
  Button,
  CropContent,
  Link,
  Icon,
} from '../src/components';

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

const Template = (args) => {
  return (
    <div>
      <ExpandableCard
        {...args}
        onToggle={(el) => console.log('ExpandableCard toggled', el)}
        header={
          <div>
            An example of a header with a An example of a header with a An
            example of a header with a An example of a header with a An example
            of a header with a An example of a header with a{' '}
            <Link url={'https://www.symphony.com'}>link</Link>
          </div>
        }
      >
        <CropContent
          className="tk-quote-container tk-quote-container--error"
          onToggle={(el) => console.log('CropContent toggled', el)}
        >
          {sampleText}
        </CropContent>
      </ExpandableCard>
    </div>
  );
};

export const Default = Template.bind({});

export const InitiallyExpandedCard: React.SFC = () => {
  return (
    <div>
      <h3>Header with buttons (Expanded Card)</h3>
      <ExpandableCard
        header={
          <div>
            <Button variant="primary" className="tk-mx-2">
              <Icon iconName="check"></Icon>
            </Button>
            <Button variant="secondary" className="tk-mr-2">
              <Icon iconName="print"></Icon>
            </Button>
            <Button variant="destructive" disabled>
              <Icon iconName="cross"></Icon>
            </Button>
          </div>
        }
        initCollapsed={false}
      >
        <CropContent className="tk-quote-container" style={{ width: '60%' }}>
          {sampleText}
        </CropContent>
      </ExpandableCard>
    </div>
  );
};

export default {
  title: 'Components/Containers/Expandable card',
  component: ExpandableCard,
  subcomponents: { CropContent },
};
