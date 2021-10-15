import { Validators } from '../../../src/core/validators/validators';

describe('Input Validators', () => {
  it('should validate required field correcltly', async () => {
    expect(await Validators.Required(null)).toEqual({ required: true });
    expect(await Validators.Required('')).toEqual({ required: true });
    expect(await Validators.Required('  ')).toEqual({ required: true });
    expect(await Validators.Required('a')).toEqual(null);
  });
  it('should validate required field correcltly', async () => {
    expect(await Validators.Email(null)).toEqual(null);
    expect(await Validators.Email('')).toEqual(null);
    expect(await Validators.Email('a')).toEqual({ email: true });
    expect(await Validators.Email('Example.WITH.Capital@gmail')).toEqual({ email: true });
    expect(await Validators.Email('FIRSTname.Lastname@morganstanley.com')).toEqual(null);
    expect(await Validators.Email('alicia.marin@symphony.com')).toEqual(null);
    expect(await Validators.Email('firstname.last-name@capitalmarkets.online')).toEqual(null);
    expect(await Validators.Email('Example.WITH.Capital@gmail.com')).toEqual(null);
  });

  it('should validate empty string field correcltly', async () => {
    expect(await Validators.EmptyString(null)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString('')).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(' ')).toEqual({ emptyString: true });
    expect(await Validators.EmptyString('a')).toEqual(null);
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
