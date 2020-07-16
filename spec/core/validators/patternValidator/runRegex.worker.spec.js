describe('runRegex.worker', () => {
  beforeAll(() => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    jest.spyOn(window.self, 'addEventListener').mockImplementation(() => {});
    jest.spyOn(window.self, 'postMessage').mockImplementation(() => {});
    /* eslint-enable @typescript-eslint/no-empty-function */
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should register listener', () => {
    // We do not import the file at the root of the file since it has
    // a side-effect
    require('../../../../src/core/validators/patternValidator/runRegex.worker.js');
    expect(window.self.addEventListener).toHaveBeenCalledTimes(1);
    window.self.addEventListener.mock.calls[0][1]({
      data: { pattern: 'aaa', value: 'aa' },
    });
    expect(window.self.postMessage).toHaveBeenCalledTimes(1);
    expect(window.self.postMessage).toHaveBeenCalledWith({ result: false });
  });

  describe('running regex in web worker', () => {
    [
      // Should return true (~= ignore check) when unsafe regex
      { pattern: '(a+)+$', value: '', expectation: true },
      { pattern: 'aaa', value: 'aaa', expectation: true },
      { pattern: 'aaa', value: 'abc', expectation: false },
      { pattern: '[1-9]', value: 'a', expectation: false },
      { pattern: '[1-9]', value: '2', expectation: true },
    ].forEach(({ pattern, value, expectation }) => {
      it(`should return ${expect} for pattern ${pattern} with value ${value}`, () => {
        const executeFn = require('../../../../src/core/validators/patternValidator/runRegex.worker.js').execute;
        expect(executeFn(pattern, value)).toBe(expectation);
      });
    });
  });
});
