import {obj} from "./mockFunction";

test('minus 함수에 Spy 를 심고, 실행이 안되게 Mock 구현체 넣는다.', () => {
    jest.spyOn(obj, 'minus').mockImplementation(() => 5);

    const result = obj.minus(1, 2);

    expect(result).toBe(5);
});

test('minus 함수에 Spy 를 심고, 실행이 안되게 Mock 구현체 넣는다.', () => {
    jest.spyOn(obj, 'minus')
        .mockImplementationOnce((a, b) => a + b)
        .mockImplementationOnce(() => 5)
        .mockImplementation(() => -1)

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(-1);
});

test('minus 함수에 Spy 를 심고, 실행이 안되게 Mock 구현체 넣는다.', () => {
    jest.spyOn(obj, 'minus')
        .mockReturnValue(5);

    const result1 = obj.minus(1, 2);

    expect(result1).toBe(5);
});