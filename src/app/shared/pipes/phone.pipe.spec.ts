import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;

  beforeEach(() => {
    pipe = new PhonePipe();
  });

  it('should format to +569 123 456', () => {
    const phone = '+56912345678';
    const formatted = pipe.transform(phone);
    expect(formatted).toBe('+569 1234 5678');
  });

  it('should return empty string if value is empty', () => {
    expect(pipe.transform("")).toBe('');
  });
});
