import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('GifGridItem tests',()=>{

    const testTitle = 'A title';
    const testUrl = 'https://localhost:9720/createItem';

    let wrapper = shallow(<GifGridItem title={testTitle} url={testUrl} />);
    
    test('Must show component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('<p> must have title prop',()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(testTitle);
    })

    test('<img> must have url and alt props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(testUrl);
        expect(img.prop('alt')).toBe(testTitle);
    })

    test('must have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        //if it includes ate__fa for example, the test will pass anyway.
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    

})

