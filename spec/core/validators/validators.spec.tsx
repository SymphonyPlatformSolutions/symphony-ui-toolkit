import { Validators } from '../../../src/core/validators/validators';

describe('Input Validators', () => {
  // Input values
  const emptyString = '';
  const emptyObject = {};
  const emptyArray = [];
  const stringWithValue = 'a';
  const stringWithSpaces = '  ';
  const objectWithValue = { value: 'opt2', label: 'option 2'};
  const arrayWithValues = [objectWithValue,objectWithValue];

  it('should validate "Required" Input correctly', async () => {
    expect(await Validators.Required(null)).toEqual({ required: true });
    expect(await Validators.Required(undefined)).toEqual({ required: true });
    expect(await Validators.Required(emptyString)).toEqual({ required: true });
    expect(await Validators.Required(stringWithSpaces)).toEqual({ required: true });
    expect(await Validators.Required(stringWithValue)).toEqual(null);
    expect(await Validators.Required(objectWithValue)).toEqual(null);
    expect(await Validators.Required(arrayWithValues)).toEqual(null);
    expect(await Validators.Required(emptyObject)).toEqual({ required: true }); 
    expect(await Validators.Required(emptyArray)).toEqual({ required: true });

  });
  it('should validate "Email" Input correctly', async () => {
    expect(await Validators.Email('Example.WITH.Capital@gmail')).toEqual({ email: true });
    expect(await Validators.Email('FIRSTname.Lastname@morganstanley.com')).toEqual(null);
    expect(await Validators.Email('alicia.marin@symphony.com')).toEqual(null);
    expect(await Validators.Email('firstname.last-name@capitalmarkets.online')).toEqual(null);
    expect(await Validators.Email('Example.WITH.Capital@gmail.com')).toEqual(null);
    expect(await Validators.Email(null)).toEqual(null);
    expect(await Validators.Email(undefined)).toEqual(null);
    expect(await Validators.Email(emptyString)).toEqual(null);
    expect(await Validators.Email(stringWithValue)).toEqual({ email: true });
    expect(await Validators.Email(stringWithSpaces)).toEqual({ email: true });
    expect(await Validators.Email(objectWithValue)).toEqual(null);
    expect(await Validators.Email(emptyObject)).toEqual(null);
    expect(await Validators.Email(arrayWithValues)).toEqual(null);
    expect(await Validators.Email(emptyArray)).toEqual(null);
  });

  it('should validate "Url" Input correctly', async () => {
    expect(await Validators.Url('google.com')).toEqual({ url: true });
    expect(await Validators.Url('https://google.com')).toEqual(null);
    expect(await Validators.Url('http://google.com')).toEqual(null);
    expect(await Validators.Url('ftp://google.com')).toEqual(null);
    expect(await Validators.Url('http://localhost')).toEqual(null);
    expect(await Validators.Url(null)).toEqual(null);
    expect(await Validators.Url(undefined)).toEqual(null);
    expect(await Validators.Url(emptyString)).toEqual(null);
    expect(await Validators.Url(stringWithValue)).toEqual({ url: true });
    expect(await Validators.Url(stringWithSpaces)).toEqual({ url: true });
    expect(await Validators.Url(objectWithValue)).toEqual(null);
    expect(await Validators.Url(emptyObject)).toEqual(null);
    expect(await Validators.Url(arrayWithValues)).toEqual(null);
    expect(await Validators.Url(emptyArray)).toEqual(null);
  });

  it('should validate "emptyString" Input correctly', async () => {
    expect(await Validators.EmptyString(null)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(undefined)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(emptyString)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(stringWithValue)).toEqual(null);
    expect(await Validators.EmptyString(stringWithSpaces)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(objectWithValue)).toEqual(null);
    expect(await Validators.EmptyString(emptyObject)).toEqual({ emptyString: true });
    expect(await Validators.EmptyString(arrayWithValues)).toEqual(null);
    expect(await Validators.EmptyString(emptyArray)).toEqual({ emptyString: true });
  });

  it('should validate "minlength" Input correctly', async () => {
    expect(await Validators.MinLength(3)('aaa')).toEqual(null);
    expect(await Validators.MinLength(3)(null)).toEqual({ minlength: true });
    expect(await Validators.MinLength(3)(undefined)).toEqual({ minlength: true });
    expect(await Validators.MinLength(3)(emptyString)).toEqual({ minlength: true });
    expect(await Validators.MinLength(3)(objectWithValue)).toEqual(null);
    expect(await Validators.MinLength(3)(emptyObject)).toEqual(null);
    expect(await Validators.MinLength(3)(emptyArray)).toEqual( {minlength: true});
    expect(await Validators.MinLength(3)(arrayWithValues)).toEqual( {minlength: true});
    expect(await Validators.MinLength(1)(arrayWithValues)).toEqual(null);
  });
  it('should validate "maxLength" Input correctly', async () => {
    expect(await Validators.MaxLength(3)('abcd')).toEqual({ maxLength: true });
    expect(await Validators.MaxLength(3)(stringWithValue)).toEqual(null);
    expect(await Validators.MaxLength(3)(null)).toEqual(null);
    expect(await Validators.MaxLength(3)(undefined)).toEqual(null);
    expect(await Validators.MaxLength(3)(emptyString)).toEqual(null);
    expect(await Validators.MaxLength(3)(objectWithValue)).toEqual(null);
    expect(await Validators.MaxLength(3)(emptyObject)).toEqual(null);
    expect(await Validators.MaxLength(3)(emptyArray)).toEqual(null);
    expect(await Validators.MaxLength(2)(arrayWithValues)).toEqual(null);
    expect(await Validators.MaxLength(1)(arrayWithValues)).toEqual( {maxLength: true});
  });
  it('should validate "minValue" Input correctly', async () => {
    expect(await Validators.MinValue(3)('2')).toEqual({ minValue: true });
    expect(await Validators.MinValue(3)('4')).toEqual(null);
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
