import sum, {obj} from "./toHaveBeenCalled";

test('sum 함수가 호출되었다.', () => {
    const sumSpy = jest.fn(sum);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalled();
});

test('sum 함수가 1번 호출되었다.', () => {
    const sumSpy = jest.fn(sum);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test('minus 함수가 1번 호출되었다. - 1', () => {
    const sumSpy = jest.fn(obj.minus);
    sumSpy(1, 2);
    expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test('minus 함수가 1번 호출되었다. - 2', () => {
    jest.spyOn(obj, 'minus');

    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(-1);
});
