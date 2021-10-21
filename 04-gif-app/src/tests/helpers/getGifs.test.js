import getGifs from "../../helpers/getGifs"

describe('getGifs Fetch tests',()=>{

    test('must return 10 elements', async () => {
        const gifs = await getGifs('Shrek');

        expect(gifs.length).toBe(10);
    })
    
    test('if no category is sent', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })


})