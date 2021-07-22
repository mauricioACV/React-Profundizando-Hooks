import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    //Aqui en describe defino el mock de useCounter porque no va a cambiar durante las pruebas, a diferencia del mock de useFetch
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    });

    test('debe de mostrarse correctamente', () => {

        //esta configuración del mock para retornar el objeto usan useFetch lo hago en la primera prueba
        //pero solo porque necesito ocuparlo en otras pruebas, no lo estoy usando en esta prueba en particular
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Mauricio',
                quote: 'Hola Mundo!'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo!');
        expect(wrapper.find('footer').text().trim()).toBe('Mauricio');
    });   
});