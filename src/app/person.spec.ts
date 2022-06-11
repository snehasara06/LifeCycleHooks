import { Person } from './person';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });
});
