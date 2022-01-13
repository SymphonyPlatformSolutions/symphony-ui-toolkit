import {
  getScrollParent
} from '../../../src/components/common/eventUtils';

describe('Event Utils', () => {
  it('getScrollParent', () => {
    expect(getScrollParent(undefined)).toEqual(null);
    expect(getScrollParent(document.createElement('div'))).toEqual(null);
  });
});
