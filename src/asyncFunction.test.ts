import {noPromise, okPromise} from "./asyncFunction";

test('okPromise 테스트', () => {
    const okFunction = jest.fn(okPromise);
    return expect(okFunction()).resolves.toBe('ok');
})

test('okPromise 테스트 - 2', () => {
    const okFunction = jest.fn(okPromise);
    okFunction().then((result) => {
        expect(result).toBe('ok');
    });
})

test('noPromise 테스트 - 2', () => {
    const noFunction = jest.fn(noPromise);
    noFunction().then((result) => {
        expect(result).toBe('no');
    })
})