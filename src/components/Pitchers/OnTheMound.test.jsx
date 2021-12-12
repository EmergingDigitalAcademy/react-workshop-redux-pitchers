import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import OnTheMound from './OnTheMound';
import storeInstance from '../../store';


it('should render an h2 tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <OnTheMound />
    </Provider>
  );
  expect(wrapper.find('h2').length).toEqual(1);
  expect(wrapper.text()).toContain('Maud Nelson');
});
