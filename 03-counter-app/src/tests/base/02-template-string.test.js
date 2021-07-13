import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('02-template tests',()=>{

    test('getSaludo must return Hola Francisco', () => {

        const name = 'Francisco';

        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola '+name);
        
    })
    
    //getSaludo must return Hola Juan if no argument is passed
    test('getSaludo must return Hola Juan if no argument is passed',()=>{
        const greeting = getSaludo();
        expect(greeting).toBe('Hola Juan');
    })


})