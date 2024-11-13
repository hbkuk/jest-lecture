import {timer} from "./callback";

test('타이머 실행 잘되나?', (done) => {
    timer((message: string) => {
        expect(message).toBe('success');
        done(); // Call back 함수를 테스트할 때에는 done 함수 실행, Promise 로 변환하는 방법 고려
    })
})