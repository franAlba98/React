import { retornaArreglo } from "../../base/07-deses-arr"

describe('07 tests', ()=>{
    test('must return a string and a number', () => {
        
        const [letras,numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    })
    
})