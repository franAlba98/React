import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('05-funciones tests', () => {
    test('getUser must return an object', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    //getusuarioActivo must return a json
    test('getusuarioActivo must return a json ', () => {

        const activeUserTest = {
            uid: 'ABC567',
            username: 'Francisco'
        }

        const activeUser = getUsuarioActivo('Francisco');

        expect(activeUser).toEqual(activeUserTest);

    })


})