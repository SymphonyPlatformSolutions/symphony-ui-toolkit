import { withKnobs, number } from '@storybook/addon-knobs';
import React from 'react';
import { CropContent } from '../src/components';

export const CropContentStory: React.SFC = () => {
  return (
    <>
      <div className="flex-row">
        <div className="flex-col" style={{ maxWidth: '30%' }}>
          <h2>Unstyled</h2>
          <p>
            <i>
              Crop content could receive any container related class to add some
              display enhancement
            </i>
          </p>
          <CropContent>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
            pariatur?
          </CropContent>
        </div>
        <div className="flex-col"></div>
      </div>
      <div className="flex-row">
        <div className="flex-col" style={{ maxWidth: '30%' }}>
          <h2>Styled with content overflow</h2>
          <p>
            <i>
              Default crop height is 80px but could be overriden using
              cropHeight property
              <br></br>
              Test with the knobs
            </i>
          </p>
          <CropContent
            cropHeight={number('Crop Height', 80) + 'px'}
            className="tk-quote-container"
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
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
            pariatur?
            <div style={{ margin: '16px' }}>
              <button className="tk-button">Got it!</button>
            </div>
          </CropContent>
        </div>
        <div className="flex-col">
          <h2>Without content overflow</h2>
          <p>
            <i>
              Note that squeezing the window and shrinking the content until it
              overflows will make the show more toggle appear
            </i>
          </p>
          <CropContent className="tk-quote-container tk-quote-container--error">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          </CropContent>
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Crop Content',
  decorators: [withKnobs]
};
