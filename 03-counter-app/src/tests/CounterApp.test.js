import React from 'react';
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';


describe('CounterApp tests', () => {

    /* test('must show the value', () => {
        const value = 99;
        const {getByText} = render(<CounterApp value={value} />);
        expect( getByText(value)).toBeInTheDocument();
    }) */
    const defaultValue = 0;
    let wrapper = shallow(<CounterApp value={defaultValue}/>);


    beforeEach(()=>{

        wrapper = shallow(<CounterApp value={defaultValue}/>);

    })

    test('must show <CounterApp /> correctly', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('must show h1', () => {
        const showValue = wrapper.find('h2').text().trim();

        expect(showValue).toBe(defaultValue.toString());
    })

    test('must increase value', () => {
        //next line finds a button in the wrapper, the first button so it's index 0 and simulates the event click in that button.
        wrapper.find('button').at(0).simulate('click');

        const showValue = wrapper.find('h2').text().trim();

        expect(showValue).toBe((defaultValue+1).toString());

    })

    test('must decrease value', () => {
        wrapper.find('button').at(2).simulate('click');

        const showValue = wrapper.find('h2').text().trim();

        expect(showValue).toBe((defaultValue-1).toString());

    })

    test('reset must set defaultValue', () => {

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        const showValue = wrapper.find('h2').text().trim();
        console.log('before reseting',showValue);

        wrapper.find('button').at(1).simulate('click');
        const showValue2 = wrapper.find('h2').text().trim();
        console.log('after reseting',showValue2);

        expect(showValue2).toBe(defaultValue.toString());
        
    })
    
    


})
 