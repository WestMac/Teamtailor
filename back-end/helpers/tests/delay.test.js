const { delay } = require("../delay");

describe("delay tests", () => {
  jest.useFakeTimers();
  it("create sucessfull delay", () => {
    const doSomething = jest.fn();
    delay(200);
    doSomething();
    jest.advanceTimersByTime(200);
    expect(doSomething).toHaveBeenCalled();
  });
});
