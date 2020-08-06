import React from 'react';
import {mount} from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  // App
  const component = mount(<App />
  );
  
  // Estado inicial
  expect(component.find('input').at(0).prop('value')).toEqual('Initial text');

  // Simulamos --> onChange (input cambia, se captura texto)
  component.find('input').at(0).simulate('change', { target: { name: 'textField', value: 'React test enzyme' }});
    
  console.log("=== P ===" + component.find('p').text());
  console.log(component.find('p').debug())

  // Esperamos que el p tenga el mismo texto que del input
  expect(component.find('p').equals(<p>React test enzyme</p>)).toEqual(true)
  
  component.unmount()
});
