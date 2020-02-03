import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/getQueens.js');

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
