import {obj} from "./toStrictEqual";

test('객체는 toStrictEqual로 비교한다.', () => {
    expect(obj()).toStrictEqual({a: 'hello'})
    expect(obj()).not.toBe({a: 'hello'})
});

test('배열 간 비교할 때도 toStrictEqual 메서드를 사용한다.', () => {
    expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
    expect([1, 2, 3]).not.toBe([1, 2, 3]);
})