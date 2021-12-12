import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import BehindThePlate from './BehindThePlate';
import storeInstance from '../../store';


it('should render an h2 tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <BehindThePlate />
    </Provider>
  );
  expect(wrapper.find('h2').length).toEqual(1);
  expect(wrapper.text()).toContain('Elston Howard');
});
