import * as index from './index';

const tick = () =>
  new Promise((res) => {
    console.log('tick');
    setImmediate(res);
  });

const advanceTimersByTime = async (time: number) => {
  const p = tick();
  jest.advanceTimersByTime(time);
  await p;
};

const waitTimers = async (loop: number, timeSec: number) => {
  for (let i = 0; i < loop; i++) {
    await advanceTimersByTime(timeSec * 1000);
  }
};

describe('test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('test', async () => {
    const mockFn = jest.fn(async () => console.log('mock called'));
    const promise = index.targetFunction(mockFn);
    await waitTimers(4, 1);
    await promise;
    expect(mockFn).toBeCalledTimes(3);
  });
});
