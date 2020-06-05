import { Validators } from '../../src/core/validators/validators';

describe('Input Validators', () => {
  it('should validate required field correcltly', () => {
    expect(Validators.Required('')).toEqual({ required: true });
    expect(Validators.Required('a')).toEqual(null);
  });

  it('should validate number correctly', () => {
    expect(Validators.Number('a')).toEqual({ number: true });
    expect(Validators.Number('1.5')).toEqual(null);
  });
  it('should validate patterns correctly', () => {
    expect(Validators.Pattern(/[1-9]/)('a')).toEqual({ pattern: true });
    expect(Validators.Pattern(/[1-9]/)('2')).toEqual(null);
  });
});
