import parseText from 'src/utils/parseText';
import test from './testData';

describe('Sample test demo file', () => {
  it('Should add parsed at the end of the string', () => {
    expect(parseText(test)).toBe('message parsed');
  });
});
