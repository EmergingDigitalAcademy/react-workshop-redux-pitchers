import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import PitchersList from './PitchersList';
import storeInstance from '../../store';


it('should render a ul tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <PitchersList />
    </Provider>
  );
  expect(wrapper.find('ul').length).toEqual(1);
});
