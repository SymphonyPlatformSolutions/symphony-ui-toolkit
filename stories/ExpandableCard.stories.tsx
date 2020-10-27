import React from 'react';
import { ExpandableCard, Button, CropContent } from '../src/components';

export const ExpandableCardContainer: React.SFC = () => {
  return (
    <div>
      <div className="flex-row">
        <div className="flex-col" style={{ maxWidth: '50%' }}>
          <h2>Basic card</h2>
          <ExpandableCard
            header={
              <div>
                An example of a header with a <a className="tk-link">link</a>
              </div>
            }
          >
            <CropContent className="tk-quote-container tk-quote-container--error">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            </CropContent>
          </ExpandableCard>
        </div>
        <div className="flex-col">
          <h2>Initially expanded card</h2>
          <ExpandableCard
            header={<Button>An example of custom header</Button>}
            initCollapsed={false}
          >
            <CropContent className="tk-quote-container">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            </CropContent>
          </ExpandableCard>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Containers',
  component: ExpandableCard,
  subcomponents: { CropContent },
};
