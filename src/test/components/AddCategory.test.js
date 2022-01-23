
import { shallow } from "enzyme";
import React from "react";
import { AddCategory } from "../../components/AddCategory";



describe('pruebas en el componente', () => {
    const setcategories= ()=>{}
    const  wrappeer = shallow(<AddCategory setcategories={setcategories}/>);
  test('debe de mostrarse correctamente ', () => {
    
    expect(wrappeer).toMatchSnapshot();

  });
  test('evaluar los cambios en el input de texto', () => {
    const input =wrappeer.find('input');
    const value ='hola mundo'
    input.simulate('change',{target:{value}});
    expect(wrappeer.find('p').text().trim()).toBe(value);
  });
  
  
});
