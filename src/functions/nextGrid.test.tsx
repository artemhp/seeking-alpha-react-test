import nextGrid from './nextGrid';

describe('Tick Transformation', () => {
  let config;

  beforeEach(() => {
    config = { rows: 5, cols: 5 };
  });

  test('One tick for stick', () => {
    const beforeTick = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    const afterTick = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    expect(nextGrid({ ...config, grid: beforeTick })).toEqual(afterTick);
  });

  test('One tick for square', () => {
    const beforeTick = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    const afterTick = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    expect(nextGrid({ ...config, grid: beforeTick })).toEqual(afterTick);
  });

  test('One tick for toad', () => {
    const beforeTick = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    const afterTick = [
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    expect(nextGrid({ ...config, grid: beforeTick })).toEqual(afterTick);
  });

  test('One tick for glider', () => {
    const beforeTick = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    const afterTick = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ].map((el) => el.map((el) => ({ isActive: !!el })));
    expect(nextGrid({ ...config, grid: beforeTick })).toEqual(afterTick);
  });
});
