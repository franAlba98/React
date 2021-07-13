
describe('demo.test.js tests', () => {

    test('strings must be equal', () => {
        const message = 'Hello world';
        const message2 = `Hello world`;

        expect(message2).toBe(message);

    })


});