import {after3days} from "./date";

test('3일 후를 리턴한다.', () => {
    jest.useFakeTimers().setSystemTime(new Date(2024, 3, 9));

    expect(after3days()).toStrictEqual(new Date(2024, 3, 12));
});

afterEach(() => {
    jest.useRealTimers(); // Fake Timers를 사용한 후 Real Timers로 변경
})