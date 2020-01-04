import React from 'react';
import { shallow } from 'enzyme';
import App from 'src/App';

describe('App', () => {
  it('Should render App with title', () => {
    const title = 'welcome';
    const app = shallow(<App title={title} />);
    expect(app.find('h1').text()).toEqual(title);
  });
});
