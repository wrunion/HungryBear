import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear('Fuzzy');
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test(`should have a name and a food level of 10 when created`, () => {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodLevel).toEqual(10);
  });
});