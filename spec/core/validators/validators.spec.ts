import { Validators } from '../../../src/core/validators/validators';

// The Validators.Pattern regex is tested inside runRegex.worker.spec.js
// here we are mocking the return as Validators.Pattern uses async calls, external dep (safe-regex) and Worker
jest.mock(
  '../../../src/core/validators/patternValidator/safeRegexExecute',
  () => ({
    safeRegexExecute: jest
      .fn()
      .mockResolvedValueOnce(false) // 'a'
      .mockResolvedValueOnce(true) // '2'
  })
);

jest.mock(
  '../../../src/core/validators/patternValidator/runRegex.worker',
  () => ({
    /* eslint-disable @typescript-eslint/no-empty-function */
    Worker: jest.fn().mockImplementation(() => {})
    /* eslint-enable @typescript-eslint/no-empty-function */
  })
);

describe('Input Validators', () => {
  it('should validate required field correcltly', async () => {
    expect(await Validators.Required('')).toEqual({ required: true });
    expect(await Validators.Required('a')).toEqual(null);
  });

  it('should validate minlength correctly', async () => {
    expect(await Validators.MinLength(3)('a')).toEqual({ minlength: true });
    expect(await Validators.MinLength(3)('abcd')).toEqual(null);
  });
  it('should validate number correctly', async () => {
    expect(await Validators.Number('a')).toEqual({ number: true });
    expect(await Validators.Number('1.5')).toEqual(null);
  });
  it('should validate patterns correctly', async () => {
    // pattern return is actually mocked now
    expect(await Validators.Pattern(/[1-9]/)('a')).toEqual({ pattern: true });
    expect(await Validators.Pattern(/[1-9]/)('2')).toEqual(null);
  });
});
