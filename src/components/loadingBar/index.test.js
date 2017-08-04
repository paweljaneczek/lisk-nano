import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoadingBar from './';
import store from '../../store';


describe('LoadingBar Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><LoadingBar /></Provider>);
  });

  it('should render Send', () => {
    expect(wrapper.find('LoadingBar')).to.have.lengthOf(1);
  });
});
