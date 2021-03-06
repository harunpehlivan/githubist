// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Section from './Section';

it('renders correctly primary', () => {
  const wrapper = shallow(
    <Section primary>
      <p>Hello world</p>
    </Section>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary', () => {
  const wrapper = shallow(
    <Section secondary>
      <p>Hello world</p>
    </Section>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames', () => {
  const wrapper = shallow(
    <Section className="testClassName">
      <p>Hello world</p>
    </Section>,
  );

  expect(wrapper.find('section').hasClass('testClassName')).toBe(true);
});
