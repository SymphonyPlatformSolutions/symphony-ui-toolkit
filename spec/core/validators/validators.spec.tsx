import { Validators } from '../../../src/core/validators/validators';

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
    expect(await Validators.Pattern(/[1-9]/)('a')).toEqual({ pattern: true });
    expect(await Validators.Pattern(/[1-9]/)('2')).toEqual(null);
  });
});
