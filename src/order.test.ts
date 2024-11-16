import {first, second, third} from "./order";

test('first -> second -> third', () => {
    const spy1 = jest.fn(first);
    const spy2 = jest.fn(second);
    const spy3 = jest.fn(third);

    (spy1 as any)(1, 2, 3);
    spy2();
    spy3();

    console.log("spy1.mock", spy1.mock);
    console.log("spy2.mock", spy2.mock);
    console.log("spy3.mock", spy3.mock);

    expect(spy1.mock.invocationCallOrder[0])
        .toBeLessThan(spy2.mock.invocationCallOrder[0])

    expect(spy2.mock.invocationCallOrder[0])
        .toBeLessThan(spy3.mock.invocationCallOrder[0])
});