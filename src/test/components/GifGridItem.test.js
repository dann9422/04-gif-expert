import React from 'react';
import {shallow} from 'enzyme';
import{GifGridItem} from '../../components/GifGridItem';

describe('pruebas en GifGridItem', () => {

  const title ='Un titulo';
  const url ='https://localhost/imagen.png';
  
  const wrapper =shallow (<GifGridItem title={title} url={url}/>)


  test('debe de mostrar el texto correctamente  ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el titulo ', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);    

  });
  test('debe de tener la imagen igual al url y el alt de los props', () => {

    const img= wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
    console.log(img.prop('src'));
    console.log(img.prop('alt'));
  });

  test('div posea la clase animate__lightSpeedInRight', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__lightSpeedInRight')).toBe(true);

    

  });
  
  
  
  
});
