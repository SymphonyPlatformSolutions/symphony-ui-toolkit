import { callParentAndChildMethod } from '../../src/utils';
import { vi } from 'vitest';

describe('Utils methods', () => {
  describe('callParentAndChildMethod method', () => {
    const methodName = 'onChange';
    const args = [1, 2, 3, 4, 'test', { key: 'value' }];
    const parent = {
      onChange: vi.fn(),
    };
    const child = {
      onChange: vi.fn(),
    };
    let spyMethodOnParent, spyMethodOnChild;
    beforeEach(() => {
      spyMethodOnParent = vi.spyOn(parent, methodName);
      spyMethodOnChild = vi.spyOn(child, methodName);
    });

    it('with no parent', () => {
      const returnedMethod = callParentAndChildMethod(null, child, methodName);
      // Call the returned method
      returnedMethod(...args);
      expect(spyMethodOnChild).toHaveBeenNthCalledWith(1, ...args);
    });

    it('with no child', () => {
      const returnedMethod = callParentAndChildMethod(parent, null, methodName);
      // Call the returned method
      returnedMethod(...args);
      expect(spyMethodOnParent).toHaveBeenNthCalledWith(1, ...args);
    });

    it('with no methodName', () => {
      const returnedMethod = callParentAndChildMethod(parent, child, null);
      // Call the returned method
      returnedMethod(...args);
      expect(spyMethodOnParent).not.toHaveBeenCalled();
      expect(spyMethodOnChild).not.toHaveBeenCalled();
    });

    it('call the parent method, then the child method', () => {
      const returnedMethod = callParentAndChildMethod(
        parent,
        child,
        methodName
      );
      // Call the returned method
      returnedMethod(...args);
      // Verifies the number of call and args
      expect(spyMethodOnParent).toHaveBeenNthCalledWith(1, ...args);
      expect(spyMethodOnChild).toHaveBeenNthCalledWith(1, ...args);
      // Verifies that the parent method is call before the child method
      expect(parent.onChange).toHaveBeenCalledBefore(child.onChange);
    });
  });
});
