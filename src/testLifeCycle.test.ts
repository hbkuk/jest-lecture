beforeAll(() => {
    console.log("테스트 실행 전 실행");
    // DB 연결 등..
});
beforeEach(cb => {
    console.log("각 테스트 케이스 전에 실행"); 
});
afterAll(() => {
    console.log("테스트 끝난 후 실행");
    // DB 연결 끊기 등..
});

afterEach(() => {
    console.log("각 테스트 실행 후 실행");
    // jest.resetAllMocks();
    // jest.restoreAllMocks(); // Spy 자체를 없앰.
});