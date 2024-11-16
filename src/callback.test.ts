import {timer} from "./callback";

// 시간 초과로 인한 테스트 실패
// test('타이머 실행 잘되나?', (done) => {
//     timer((message: string) => {
//         expect(message).toBe('success');
//         done(); // Call back 함수를 테스트할 때에는 done 함수 실행, Promise 로 변환하는 방법 고려
//     })
// });

test('시간아 빨리가라!', (done) => {
    expect.assertions(1); // 비동기 테스트에서는 해당 검증코드 필요.

    jest.useFakeTimers();
    timer((message: string) => {
        expect(message).toBe('success');
        done();
    })

    jest.runAllTimers();
})
