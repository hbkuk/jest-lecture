import {obj} from "./toMatchObject";

test('클래스 비교는 toMatchObject로 비교한다.', () => {
    expect(obj("hello")).toMatchObject({a: 'hello'})
    expect(obj("hello")).not.toStrictEqual({a: 'hello'})
});