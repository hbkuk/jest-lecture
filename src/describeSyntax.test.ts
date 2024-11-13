let beforeEachCount = 0;
let afterEachCount = 0;

describe('beforeEach/afterEach 적용', () => {
   beforeEach(() => {
       console.log('beforeEach', ++beforeEachCount);
   });
   afterEach(() => {
       console.log('afterEach', ++afterEachCount);
   });

   test('1 + 1', () => {
       console.log('beforeEach/afterEach 적용 - 테스트 실행');
       expect(1 + 1).toBe(2);
   })
});

describe('beforeEach/afterEach 미적용', () => {
    beforeAll(() => {
        console.log('beforeAll은 실행될 것을 기대함.');
    });
    test('1 + 1', () => {
        console.log('beforeEach/afterEach 미적용 - 테스트 실행');
        expect(1 + 1).toBe(2);
    })
    afterAll(() => {
        console.log('afterAll은 실행될 것을 기대함.');
    });
});