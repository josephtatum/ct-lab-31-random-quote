import React from 'react';
import { shallow } from 'enzyme';
import { getRandomQueen } from '../services/getQueens';
import GetQueen from './GetQueen';

jest.mock('../services/getQueens.js');

describe('GetQueen container', () => {
  it('can get a queen from the API', () => {
    const wrapper = shallow(<GetQueen />);
    const getQueenContainer = wrapper.instance();

    return getQueenContainer.getQueen()
      .then(() => {
        expect(wrapper.state('queen')).toEqual([{
          image_url: 'image.jpg',
          name: 'Trixie Mattel'
        }]);
      });
  });
});
