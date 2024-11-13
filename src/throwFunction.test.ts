import {CustomerError, customError, error} from "./throwFunction";

// 호출하는 함수가 Error Throw할 경우, 화살표 함수로 감싸서 실행
test('error가 발생하는지?', () => {
    expect(() => error()).toThrow(Error);
    expect(() => customError()).toThrow(CustomerError);
    expect(function () {
        error();
    }).toThrow(Error);
})

test('error가 발생하는지?(try/catch)', () => {
    try {
        error();
    } catch(err) {
        expect(err).toStrictEqual(new Error());
    }
})