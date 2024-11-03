export function okPromise() {
    return Promise.resolve('ok');
}

export function noPromise() {
    return Promise.reject('no');
}

// async 함수는 Return 값을 Promise 객체로 반환
export async function okAsync() {
    return 'ok';
}

export async function noAsync() {
    throw 'no';
}