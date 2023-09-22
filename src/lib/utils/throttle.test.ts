import { throttle } from '@lib/utils';

describe('throttle', () => {
  jest.useFakeTimers();

  it('should call the callback only once in fixed time interval', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);

    throttledCallback();
    throttledCallback();
    throttledCallback();

    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call the callback only once', () => {
    const callback = jest.fn();
    const throttledCallback = throttle(callback, 1000);

    throttledCallback();

    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(callback).not.toHaveBeenCalled();
  });
});
