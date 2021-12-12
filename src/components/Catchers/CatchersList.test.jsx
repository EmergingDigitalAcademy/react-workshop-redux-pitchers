import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import CatchersList from './CatchersList'
import storeInstance from '../../store';


it('should render a ul tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <CatchersList />
    </Provider>
  );
  expect(wrapper.find('ul').length).toEqual(1);
});
