const { debounce } = require("../dist/index")


jest.useFakeTimers();

test ("It should reset when calling it before the delay time", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 500)

    debouncedFunc();

    jest.advanceTimersByTime(250);

    debouncedFunc();

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
})

test("It should be called multiple times", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 250);

    debouncedFunc();

    jest.advanceTimersByTime(500);

    debouncedFunc()

    jest.advanceTimersByTime(500);

    debouncedFunc()

    jest.runAllTimers()

    expect(func).toBeCalledTimes(3);
})

